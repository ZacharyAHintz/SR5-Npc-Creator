import React, { useState, useEffect } from "react";
import DiceRoller from "../../helperFunctions/DiceRoller";
import setLimits from "../../helperFunctions/setLimits";
import toCamelCase from "../../helperFunctions/camleCaseString";
import LimitDiceRoller from "../../helperFunctions/LimitDiceRoller";

export default function SkillsComponent({ setCurrentCharacter, character }) {
  const [editedSkill, setEditedSkill] = useState({});

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

  setLimits(character);

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

    const storedCharacters = JSON.parse(localStorage.getItem("characters"));
    const updatedCharacters = storedCharacters.map((char) =>
      char.id === character.id ? updatedCharacter : char,
    );
    localStorage.setItem("characters", JSON.stringify(updatedCharacters));

    setCurrentCharacter(updatedCharacter);
    localStorage.setItem("character", JSON.stringify(updatedCharacter));

    const event = new Event("characterAdded");
    window.dispatchEvent(event);
  };

  return (
    <>
      {Object.keys(character.skills).map((key) => {
        const skill = character.skills[key];
        const rank = skill?.rank;
        const bonus = skill?.bonus ?? 0;
        const total =
          skill?.total ?? (rank ? parseInt(rank) + parseInt(bonus) : 0);
        const editedValue = editedSkill[key]?.rank ?? rank;
        const editedBonus = editedSkill[key]?.bonus ?? bonus;

        return (
          <div key={key}>
            <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
            {rank !== undefined ? (
              <div>
                <div>
                  Base:
                  <input
                    type="number"
                    value={editedValue}
                    onChange={(e) =>
                      handleSkillChange(key, e.target.value, editedBonus)
                    }
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
                  />
                </div>
                <div>Total: {total}</div>
                <LimitDiceRoller
                  total={total}
                  limit={skill.limit}
                  character={character}
                />
              </div>
            ) : (
              <div>
                <p>Base Stats: Not available</p>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}
