import React, { useState } from "react";
import getCharacterByID from "../../helperFunctions/getCharacterByID";
import updateCharacterInLocalStorage from "../../helperFunctions/updateCharacterInLocalStorage";
import LimitDiceRoller from "../../helperFunctions/LimitDiceRoller";
import styles from "../../styles/ComplexFormComponent.module.css";

export default function ComplexFormComponent({ id }) {
  const [editedComplexForms, setEditedComplexForms] = useState({});
  const [character, setCharacter] = useState(getCharacterByID(id));
  const [limit, setLimit] = useState(0);

  const complexForms = character.complexForms || {};

  const handleRankChange = (key, newRank, newBonusValue) => {
    const updatedEditedComplexForms = {
      ...editedComplexForms,
      [key]: { rank: newRank, bonus: newBonusValue },
    };
    setEditedComplexForms(updatedEditedComplexForms);

    const updatedComplexForms = {
      ...complexForms,
      [key]: {
        ...complexForms[key],
        rank: Number(newRank),
        bonus: Number(newBonusValue),
        total:
          Number(newRank) +
          Number(newBonusValue) +
          Number(character.stats.magic),
      },
    };

    const updatedCharacter = {
      ...character,
      complexForms: updatedComplexForms,
    };

    updateCharacterInLocalStorage(updatedCharacter);
    setCharacter(updatedCharacter);
  };

  return (
    <>
      {Object.keys(complexForms).map((key) => {
        const { name, target, fading, duration } = complexForms[key];
        const rank =
          editedComplexForms[key]?.rank ||
          Number(character.rating) + Number(Math.floor(Math.random() * 4) + 1);
        const bonus =
          editedComplexForms[key]?.bonus ||
          Number(complexForms[key]?.bonus) ||
          0;
        const magic = Number(character.stats.magic);
        const total = Number(rank) + Number(bonus) + Number(magic);

        return (
          <div key={key} className={styles.complexFormContainer}>
            <h3>{name}</h3>
            <h5>
              Fading: {fading} | Duration: {duration} | Target: {target}
            </h5>
            <div className={styles.complexFormDetails}>
              <div>
                Skill:
                <input
                  className={styles.numberInput}
                  type="number"
                  value={rank}
                  onChange={(e) => handleRankChange(key, e.target.value, bonus)}
                />
              </div>
              <div>Resonance: {magic}</div>
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
                  onChange={(e) => setLimit(Number(e.target.value))}
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
