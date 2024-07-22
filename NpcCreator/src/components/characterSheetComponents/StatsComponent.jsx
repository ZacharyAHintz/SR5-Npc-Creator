import React, { useState, useEffect } from "react";
import DiceRoller from "../../helperFunctions/DiceRoller";
import updateCharacterInLocalStorage from "../../helperFunctions/updateCharacterInLocalStorage";
import getCharacterByID from "../../helperFunctions/getCharacterByID";

export default function StatsComponent({ id }) {
  const [character, setCharacter] = useState(getCharacterByID(id));
  const [editedStats, setEditedStats] = useState({});

  useEffect(() => {
    if (character) {
      setBaseStats(character);
      setEditedStats(character.stats);
    }
  }, [character]);

  const setBaseStats = (character) => {
    const statsToRender = [
      "body",
      "charisma",
      "intuition",
      "logic",
      "reaction",
      "strength",
      "willpower",
      "agility",
    ];

    statsToRender.forEach((stat) => {
      character.stats[stat].bonus = character.stats[stat].bonus ?? 0;
      character.stats[stat].total =
        character.stats[stat].total ??
        parseInt(character.stats[stat]?.baseStats) +
          parseInt(character.stats[stat]?.bonus);
    });
  };

  const handleBaseStatsChange = (key, newBaseValue, newBonusValue) => {
    const updatedEditedStats = {
      ...editedStats,
      [key]: {
        baseStats: newBaseValue,
        bonus: newBonusValue,
      },
    };

    const updatedStats = {
      ...character.stats,
      [key]: {
        ...character.stats[key],
        baseStats: newBaseValue,
        bonus: newBonusValue,
        total: parseInt(newBaseValue) + parseInt(newBonusValue),
      },
    };

    const updatedCharacter = {
      ...character,
      stats: updatedStats,
    };

    setBaseStats(updatedCharacter);

    updateCharacterInLocalStorage(id, updatedCharacter);
    setCharacter(updatedCharacter);
    console.log(character);

    const event = new Event("characterAdded");
    window.dispatchEvent(event);
  };

  const statsToRender = [
    "body",
    "charisma",
    "intuition",
    "logic",
    "reaction",
    "strength",
    "willpower",
    "agility",
  ];

  return (
    <div>
      {statsToRender.map((key) => {
        const stat = character.stats[key];
        const baseStats = stat?.baseStats;
        const bonus = stat?.bonus ?? 0;
        const total = stat?.total ?? parseInt(baseStats) + parseInt(bonus);
        const editedValue = editedStats[key]?.baseStats ?? baseStats;
        const editedBonus = editedStats[key]?.bonus ?? bonus;

        return (
          <div key={key}>
            <h3>{key.charAt(0).toUpperCase() + key.slice(1)} Stats</h3>
            {baseStats !== undefined ? (
              <div>
                <div>
                  Base:
                  <input
                    type="number"
                    value={editedValue}
                    onChange={(e) => {
                      handleBaseStatsChange(key, e.target.value, editedBonus);
                    }}
                  />
                </div>
                <div>
                  Bonus:
                  <input
                    type="number"
                    value={editedBonus}
                    onChange={(e) => {
                      handleBaseStatsChange(key, editedValue, e.target.value);
                    }}
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
      })}
    </div>
  );
}
