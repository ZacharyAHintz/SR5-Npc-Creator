import React, { useState, useEffect } from "react";
import DiceRoller from "../DiceRoller";
import setLimits from "../../helperFunctions/setLimits";
import toCamelCase from "../../helperFunctions/camleCaseString";

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
  console.log("skills", character.skills);

  useEffect(() => {
    const storedCharacter = JSON.parse(localStorage.getItem("character"));
    if (storedCharacter) {
      setEditedSkill(storedCharacter.skills);
    }
  }, []);
  console.log("editedSkill", editedSkill);

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

    const updatedStats = {
      ...stats,
      [key]: {
        ...stats[key],
        rank: newRank,
        bonus: newBonusValue,
        total: parseInt(newRank) + parseInt(newBonusValue),
      },
    };

    const updatedCharacter = {
      ...character,
      stats: updatedStats,
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

  // return character.skills.map((key) => {
  //   const skill = stats[key];
  //   const rank = stat?.rank;
  //   const bonus = stat?.bonus ?? 0;
  //   const total = stat?.total ?? parseInt(rank) + parseInt(bonus);
  //   const editedValue = editedSkill[key]?.rank ?? rank;
  //   const editedBonus = editedSkill[key]?.bonus ?? bonus;
  for (const key in character.skills) {
    const skill = character.skills.skill;
    const rank = character.skills?.rank;
    const bonus = character.skills?.bonus ?? 0;
    const total = character.skills?.total ?? parseInt(rank) + parseInt(bonus);
    const editedValue = editedSkill[key]?.rank ?? rank;
    const editedBonus = editedSkill[key]?.bonus ?? bonus;

    return (
      <div key={key}>
        <h3>{key.charAt(0).toUpperCase() + key.slice(1)} Stats</h3>
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
            <DiceRoller total={total} />
          </div>
        ) : (
          <div>
            <p>Base Stats: Not available</p>
          </div>
        )}
      </div>
    );
  }
}
