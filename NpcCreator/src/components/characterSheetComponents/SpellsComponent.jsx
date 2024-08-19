import React, { useState, useEffect } from "react";
import getCharacterByID from "../../helperFunctions/getCharacterByID";
import updateCharacterInLocalStorage from "../../helperFunctions/updateCharacterInLocalStorage";
import LimitDiceRoller from "../../helperFunctions/LimitDiceRoller";
import styles from "../../styles/SpellsComponent.module.css";

export default function SpellsComponent({ id }) {
  const [editedSpells, setEditedSpells] = useState({});
  const [character, setCharacter] = useState(getCharacterByID(id));
  const [limit, setLimit] = useState(0);

  const spells =
    character.archetype === "Technomancer"
      ? character.complexForms || []
      : character.spells || [];

  const handleRankChange = (key, newRank, newBonusValue) => {
    const updatedEditedSpells = {
      ...editedSpells,
      [key]: { rank: newRank, bonus: newBonusValue },
    };
    setEditedSpells(updatedEditedSpells);

    const updatedSpells = {
      ...spells,
      [key]: {
        ...spells[key],
        rank: newRank,
        bonus: newBonusValue,
        total:
          parseInt(newRank) +
          parseInt(newBonusValue) +
          parseInt(character.stats.magic),
      },
    };

    const updatedCharacter = {
      ...character,
      spells: updatedSpells,
    };

    updateCharacterInLocalStorage(updatedCharacter);
    setCharacter(updatedCharacter);
  };

  return (
    <>
      {Object.keys(spells).map((key) => {
        const { name, damage, drain, range, duration, effects, type } =
          spells[key];
        const rank =
          editedSpells[key]?.rank ||
          parseInt(character.rating) +
            parseInt(Math.floor(Math.random() * 4) + 1);
        const bonus = editedSpells[key]?.bonus || spells[key]?.bonus || 0;
        const magic = character.stats.magic;
        const total = rank + bonus + magic;

        return (
          <div key={key} className={styles.spellContainer}>
            <h3>{name}</h3>
            <h5>
              Damage: {damage} | Drain: {drain} | Range: {range} | Duration:{" "}
              {duration} | Effects: {effects} | Type: {type}
            </h5>
            <div className={styles.spellDetails}>
              <div>
                Skill:
                <input
                  className={styles.numberInput}
                  type="number"
                  value={rank}
                  onChange={(e) => handleRankChange(key, e.target.value, bonus)}
                />
              </div>
              <div>Magic: {magic}</div>
              <div>
                Bonus:
                <input
                  className={styles.numberInput}
                  type="number"
                  value={bonus}
                  onChange={(e) => handleRankChange(key, rank, e.target.value)}
                />
              </div>
              <div>Total: {total}</div>
              <div>
                Force:
                <input
                  className={styles.numberInput}
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
          </div>
        );
      })}
    </>
  );
}
