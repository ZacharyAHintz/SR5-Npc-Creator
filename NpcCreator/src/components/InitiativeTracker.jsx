import { useState } from "react";
import styles from "../styles/InitiativeTracker.module.css";
import getCharacterByID from "../helperFunctions/getCharacterByID";

export default function InitiativeTracker({ char }) {
  const id = char.id;
  const [character, setCharacter] = useState(getCharacterByID(id));
  const [initiative, setInitiative] = useState("physicalInitiativeRoll");
  const [initiativeResult, setInitiativeResult] = useState(null); // State to hold the result

  const reaction = character.stats.reaction.total
    ? character.stats.reaction.total
    : character.stats.reaction.baseStats;
  const intuition = character.stats.intuition.total
    ? character.stats.intuition.total
    : character.stats.intuition.baseStats;
  const initiativeDice = character.initiativeDice
    ? character.initiativeDice
    : 0;

  const dataProcessing = character.cyberdeck
    ? Math.max(...Object.values(character.cyberdeck)[0].attributeArray)
    : Object.values(character.comlinks)[0].rating;

  function rollD6() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function rollMultipleD6s(numberOfDice) {
    let total = 0;
    for (let i = 0; i < numberOfDice; i++) {
      total += rollD6();
    }
    return total;
  }

  function physicalInitiativeRoll() {
    return (
      Number(reaction) + Number(intuition) + rollMultipleD6s(1 + initiativeDice)
    );
  }
  function riggingARlInitiativeRoll() {
    return (
      Number(reaction) + Number(intuition) + rollMultipleD6s(1 + initiativeDice)
    );
  }

  function astralInitiativeRoll() {
    return Number(intuition) * 2 + rollMultipleD6s(2);
  }

  function matrixARlInitiativeRoll() {
    return Number(reaction) + Number(intuition) + rollMultipleD6s(1);
  }

  function matrixColdVRlInitiativeRoll() {
    return Number(dataProcessing) + Number(intuition) + rollMultipleD6s(3);
  }

  function matrixHotVRlInitiativeRoll() {
    return Number(dataProcessing) + Number(intuition) + rollMultipleD6s(4);
  }

  function handleInitiativeSelection(e) {
    setInitiative(e.target.value);
  }

  function handleRollClick() {
    const rollFunction = {
      physicalInitiativeRoll,
      astralInitiativeRoll,
      matrixARlInitiativeRoll,
      matrixColdVRlInitiativeRoll,
      matrixHotVRlInitiativeRoll,
      riggingARlInitiativeRoll,
    }[initiative];

    if (rollFunction) {
      const result = rollFunction();
      setInitiativeResult(result);
      console.log(1 + initiativeDice);
    }
  }

  return (
    <div>
      <div className={styles.title}>Initiative</div>
      <div className={styles.initiativeContainer}>
        <select
          className={styles.initiativeSelecter}
          value={initiative}
          onChange={handleInitiativeSelection}
          id="initiative"
        >
          <option value="physicalInitiativeRoll">Physical</option>
          <option value="astralInitiativeRoll">Astral</option>
          <option value="matrixARlInitiativeRoll">Matrix: AR</option>
          <option value="matrixColdVRlInitiativeRoll">
            Matrix: Cold-Sim VR
          </option>
          <option value="matrixHotVRlInitiativeRoll">Matrix: Hot-Sim VR</option>
          <option value="riggingARlInitiativeRoll">Rigging AR</option>
        </select>
        <button className={styles.rollButton} onClick={handleRollClick}>
          Roll
        </button>
        {initiativeResult !== null && (
          <div className={styles.result}>
            Result:{" "}
            <span className={styles.resultText}>{initiativeResult}</span>
          </div>
        )}
      </div>
    </div>
  );
}
