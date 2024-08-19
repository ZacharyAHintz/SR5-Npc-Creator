import React, { useState, useEffect } from "react";
import DiceRoller from "../../helperFunctions/DiceRoller";
import updateCharacterInLocalStorage from "../../helperFunctions/updateCharacterInLocalStorage";
import getCharacterByID from "../../helperFunctions/getCharacterByID";
import setLimits from "../../helperFunctions/setLimits";
import styles from "../../styles/StatsComponent.module.css";

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

  setBaseStats(character);
  updateCharacterInLocalStorage(id, character);
  setLimits(id);

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
    setLimits(id);

    const event = new Event("characterChanged");
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
      <div className={styles.summary}>
        {statsToRender.map((key) => {
          const stat = character.stats[key];
          const total =
            stat?.total ?? parseInt(stat?.baseStats) + parseInt(stat?.bonus);
          return (
            <span key={key} className={styles.summaryItem}>
              {key.charAt(0).toUpperCase() + key.slice(1)}: {total}
            </span>
          );
        })}
      </div>

      {statsToRender.map((key) => {
        const stat = character.stats[key];
        const baseStats = stat?.baseStats;
        const bonus = stat?.bonus ?? 0;
        const total = stat?.total ?? parseInt(baseStats) + parseInt(bonus);
        const editedValue = editedStats[key]?.baseStats ?? baseStats;
        const editedBonus = editedStats[key]?.bonus ?? bonus;

        return (
          <div key={key}>
            <h3 className={styles.title}>
              {key.charAt(0).toUpperCase() + key.slice(1)} Stats
            </h3>
            {baseStats !== undefined ? (
              <div className={styles.input}>
                <div>
                  Base:
                  <input
                    type="number"
                    value={editedValue}
                    className={styles.input}
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
                    className={styles.input}
                    onChange={(e) => {
                      handleBaseStatsChange(key, editedValue, e.target.value);
                    }}
                  />
                </div>
                <div className={styles.result}>Total: {total}</div>
                <DiceRoller total={total} />
              </div>
            ) : (
              <div>
                <p className={styles.result}>Base Stats: Not available</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
