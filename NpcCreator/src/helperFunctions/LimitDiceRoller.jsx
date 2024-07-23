import React, { useState } from "react";
import getCharacterByID from "./getCharacterByID";

function rollDice(total, skillLimit) {
  const results = [];
  for (let i = 0; i < total; i++) {
    results.push(Math.floor(Math.random() * 6) + 1);
  }
  return results;
}

export default function LimitDiceRoller({ total, limit, id }) {
  const character = getCharacterByID(id);
  const [results, setResults] = useState([]);
  const [successes, setSuccesses] = useState(0);

  let skillLimit = null;
  if (typeof limit !== "string") {
    skillLimit = limit;
  } else if (limit === "social") {
    skillLimit = character.socialLimit;
  } else if (limit === "mental") {
    skillLimit = character.mentalLimit;
  } else if (limit === "physical") {
    skillLimit = character.physicalLimit;
  } else {
    skillLimit = character.mentalLimit;
  }

  const handleRoll = () => {
    const diceResults = rollDice(total);
    setResults(diceResults);
    const successCount = diceResults.filter((roll) => roll >= 5).length;

    if (successCount >= skillLimit) {
      setSuccesses(skillLimit);
    } else {
      setSuccesses(successCount);
    }
  };

  return (
    <div>
      <button onClick={handleRoll}>Roll {total}d6</button>
      {results.length > 0 && (
        <div>
          <div>Results: {results.join(", ")}</div>
          <div>Successes: {successes}</div>
        </div>
      )}
    </div>
  );
}
