import React, { useState, useEffect } from "react";
import styles from "../../styles/SkillsComponent.module.css";
import toCamelCase from "../../helperFunctions/camleCaseString";
import LimitDiceRoller from "../../helperFunctions/LimitDiceRoller";
import getCharacterByID from "../../helperFunctions/getCharacterByID";
import updateCharacterInLocalStorage from "../../helperFunctions/updateCharacterInLocalStorage";

export default function SkillsComponent({ id }) {
  const [editedSkill, setEditedSkill] = useState({});
  const [character, setCharacter] = useState(getCharacterByID(id));
  const [openSkills, setOpenSkills] = useState({});

  function addKeyToSkills(character) {
    const newSkills = {};
    for (const skill in character.skills) {
      if (character.skills.hasOwnProperty(skill)) {
        const camelCaseSkill = toCamelCase(character.skills[skill].skill);
        newSkills[camelCaseSkill] = { ...character.skills[skill] };
      }
    }
    character.skills = newSkills;
  }
  addKeyToSkills(character);

  useEffect(() => {
    const storedCharacter = JSON.parse(localStorage.getItem("character"));
    if (storedCharacter) {
      setEditedSkill(storedCharacter.skills);
    }
  }, []);

  const toggleSkillOpen = (key) => {
    setOpenSkills((prevOpenSkills) => ({
      ...prevOpenSkills,
      [key]: !prevOpenSkills[key],
    }));
  };

  const handleSkillChange = (key, newRank, newBonusValue) => {
    const updatedEditedSkill = {
      ...editedSkill,
      [key]: {
        rank: newRank,
        bonus: newBonusValue,
      },
    };
    setEditedSkill(updatedEditedSkill);

    const updatedSkills = {
      ...character.skills,
      [key]: {
        ...character.skills[key],
        rank: newRank,
        bonus: newBonusValue,
        total: parseInt(newRank) + parseInt(newBonusValue),
      },
    };

    const updatedCharacter = {
      ...character,
      skills: updatedSkills,
    };

    updateCharacterInLocalStorage(updatedCharacter);
    setCharacter(updatedCharacter);

    const event = new Event("characterChanged");
    window.dispatchEvent(event);
  };

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className={styles.container}>
      {Object.keys(character.skills).map((key) => {
        const skill = character.skills[key];
        const skillStat = skill.attribute;
        const skillStatValue =
          skillStat !== "resonance" && skillStat !== "magic"
            ? character.stats[skillStat]?.total ?? 0
            : character.stats["magic"];
        const rank = skill?.rank;
        const bonus = skill?.bonus ?? 0;
        const total =
          skill?.total ??
          (rank
            ? parseInt(rank) + parseInt(bonus) + parseInt(skillStatValue)
            : 0);
        const editedValue = editedSkill[key]?.rank ?? rank;
        const editedBonus = editedSkill[key]?.bonus ?? bonus;

        return (
          <div key={key} className={styles.skillContainer}>
            <div
              className={`${styles.skillTitle} ${styles.clickable}`}
              onClick={() => toggleSkillOpen(key)}
            >
              <h3 className={styles.title}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </h3>
            </div>
            {openSkills[key] && (
              <div className={styles.input}>
                <div>
                  Base:
                  <input
                    type="number"
                    value={editedValue}
                    onChange={(e) =>
                      handleSkillChange(key, e.target.value, editedBonus)
                    }
                    className={styles.input}
                  />
                </div>
                <div>
                  Bonus:
                  <input
                    type="number"
                    value={editedBonus}
                    onChange={(e) =>
                      handleSkillChange(key, editedValue, e.target.value)
                    }
                    className={styles.input}
                  />
                </div>
                <div className={styles.text}>
                  {capitalizeFirstLetter(skillStat)}: {skillStatValue}
                </div>
                <div className={styles.text}>Total: {total}</div>
                <LimitDiceRoller total={total} limit={skill.limit} id={id} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
