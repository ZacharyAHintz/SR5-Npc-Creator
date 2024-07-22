import React, { useState, useEffect } from "react";
import getCharacterByID from "../../helperFunctions/getCharacterByID";
import updateCharacterInLocalStorage from "../../helperFunctions/updateCharacterInLocalStorage";
import DiceRoller from "../../helperFunctions/DiceRoller";
import LimitDiceRoller from "../../helperFunctions/LimitDiceRoller";

export default function ComplexFormComponent({ id }) {
  const [editedSpells, setEditedSpells] = useState({});
  const [character, setCharacter] = useState(getCharacterByID(id));
  const [limit, setLimit] = useState(0);

  const characterSpells = character.spells || [];
  const complexForms = character.complexForms || [];

  let spells =
    character.archetype === "Technomancer" ? complexForms : characterSpells;

  const handleRankChange = (key, newRank, newBonusValue) => {
    const updatedEditedSpells = {
      ...editedSpells,
      [key]: {
        rank: newRank,
        bonus: newBonusValue,
      },
    };
    setEditedSpells(updatedEditedSpells);

    const updatedComplexForms = {
      ...character.complexForms,
      [key]: {
        ...character.complexForms[key],
        rank: parseInt(newRank) || 0,
        bonus: parseInt(newBonusValue) || 0,
        total:
          (parseInt(newRank) || 0) +
            (parseInt(newBonusValue) || 0) +
            parseInt(character.stats.magic) || 0,
      },
    };

    const updatedCharacter = {
      ...character,
      complexForms: updatedComplexForms,
    };

    const storedCharacters = JSON.parse(localStorage.getItem("characters"));
    const updatedCharacters = storedCharacters.map((char) =>
      char.id === character.id ? updatedCharacter : char,
    );
    localStorage.setItem("characters", JSON.stringify(updatedCharacters));

    setCharacter(updatedCharacter);
    localStorage.setItem("character", JSON.stringify(updatedCharacter));

    const event = new Event("characterAdded");
    window.dispatchEvent(event);
  };

  return (
    <>
      {Object.keys(spells).map((key) => {
        const name = spells[key].name;
        const rank = character.rating + Math.floor(Math.random() * 4) + 1;
        const bonus = spells[key]?.bonus ?? 0;
        const target = spells[key].target;
        const fading = spells[key].fading;
        const duration = spells[key].duration;
        const magic = character.stats.magic;
        const editedValue = editedSpells[key]?.rank ?? rank;
        const editedBonus = editedSpells[key]?.bonus ?? bonus;

        const total =
          spells[key].total ??
          (rank ? parseInt(rank) + parseInt(bonus) + parseInt(magic) : 0);

        return (
          <div key={key}>
            <h3>{name}</h3>
            <h5>
              Fading: {fading} Duration: {duration} Target: {target}
            </h5>
            {rank !== undefined ? (
              <div>
                <div>
                  Skill:
                  <input
                    type="number"
                    value={editedValue}
                    onChange={(e) =>
                      handleRankChange(key, e.target.value, editedBonus)
                    }
                  />
                </div>
                <div>Resonance: {magic}</div>
                <div>
                  Bonus:
                  <input
                    type="number"
                    value={editedBonus}
                    onChange={(e) =>
                      handleRankChange(key, editedValue, e.target.value)
                    }
                  />
                </div>
                <div>Total: {total}</div>
                <div>
                  Force:
                  <input
                    type="number"
                    value={limit}
                    onChange={(e) => setLimit(e.target.value)}
                  />
                </div>
                <LimitDiceRoller
                  total={total}
                  limit={Number(limit)}
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
