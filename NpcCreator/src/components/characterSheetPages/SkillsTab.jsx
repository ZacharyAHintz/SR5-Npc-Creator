import React, { useState, useEffect } from "react";
import SkillsComponent from "../characterSheetComponents/SkillsComponent";

export default function SkillsTab({ character }) {
  const [currentCharacter, setCurrentCharacter] = useState(character);

  useEffect(() => {
    const storedCharacter = JSON.parse(localStorage.getItem("character"));
    if (storedCharacter) {
      setCurrentCharacter(storedCharacter);
    }
  }, []);

  return (
    <div>
      <h2>Skills</h2>
      <hr />
      <div>
        {currentCharacter?.id && <h3>{currentCharacter.id}</h3>}
        <SkillsComponent
          character={currentCharacter}
          setCurrentCharacter={setCurrentCharacter}
        />
      </div>
    </div>
  );
}
