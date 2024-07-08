import React, { useState, useEffect } from "react";
import StatsComponent from "./characterSheetComponents/StatsComponent";

export default function MainTab({ character }) {
  const [currentCharacter, setCurrentCharacter] = useState(character);

  useEffect(() => {
    const storedCharacter = JSON.parse(localStorage.getItem("character"));
    if (storedCharacter) {
      setCurrentCharacter(storedCharacter);
    }
  }, []);

  return (
    <div>
      <h2>Attributes</h2>
      <hr />
      <div>
        {currentCharacter?.id && <h3>{currentCharacter.id}</h3>}
        <StatsComponent
          character={currentCharacter}
          stats={currentCharacter.stats}
          setCurrentCharacter={setCurrentCharacter}
        />
      </div>
    </div>
  );
}
