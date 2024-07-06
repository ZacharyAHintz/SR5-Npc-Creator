import React, { useState } from "react";

function rollDice(total) {
  const results = [];
  for (let i = 0; i < total; i++) {
    results.push(Math.floor(Math.random() * 6) + 1);
  }
  return results;
}

export default function DiceRoller({ total }) {
  const [results, setResults] = useState([]);
  const [successes, setSuccesses] = useState(0);

  const handleRoll = () => {
    const diceResults = rollDice(total);
    setResults(diceResults);
    const successCount = diceResults.filter((roll) => roll >= 5).length;
    setSuccesses(successCount);
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
