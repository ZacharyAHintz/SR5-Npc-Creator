import React, { useState, useEffect } from "react";

export default function StatsComponent({ stats, setCurrentCharacter }) {
  const [editedStats, setEditedStats] = useState({});

  useEffect(() => {
    const storedCharacter = JSON.parse(localStorage.getItem("character"));
    if (storedCharacter) {
      setEditedStats(storedCharacter.stats);
    }
  }, []);

  const handleBaseStatsChange = (key, newBaseValue, newBonusValue) => {
    setEditedStats({
      ...editedStats,
      [key]: {
        baseStats: newBaseValue,
        bonus: newBonusValue,
      },
    });

    const updatedStats = {
      ...stats,
      [key]: {
        ...stats[key],
        baseStats: newBaseValue,
        bonus: newBonusValue,
        total: parseInt(newBaseValue) + parseInt(newBonusValue),
      },
    };

    const updatedCharacter = {
      ...JSON.parse(localStorage.getItem("character")),
      stats: updatedStats,
    };

    setCurrentCharacter(updatedCharacter);
    localStorage.setItem("character", JSON.stringify(updatedCharacter));
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

  return statsToRender.map((key) => {
    const stat = stats[key];
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
                onChange={(e) =>
                  handleBaseStatsChange(key, e.target.value, editedBonus)
                }
              />
            </div>
            <div>
              Bonus:
              <input
                type="number"
                value={editedBonus}
                onChange={(e) =>
                  handleBaseStatsChange(key, editedValue, e.target.value)
                }
              />
            </div>
            <div>Total: {total}</div>
          </div>
        ) : (
          <div>
            <p>Base Stats: Not available</p>
          </div>
        )}
      </div>
    );
  });
}
