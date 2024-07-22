import React, { useState, useEffect } from "react";
import SkillsComponent from "../characterSheetComponents/SkillsComponent";
import getCharacterByID from "../../helperFunctions/getCharacterByID";

export default function SkillsTab({ id }) {
  const [character, setCharacter] = useState(getCharacterByID(id));
  const [currentCharacter, setCurrentCharacter] = useState(character);

  useEffect(() => {
    const storedCharacter = JSON.parse(localStorage.getItem("character"));
    if (storedCharacter) {
      setCurrentCharacter(storedCharacter);
    }
  }, []);

  return (
    <div>
      <hr />
      <div>
        <SkillsComponent id={id} />
      </div>
    </div>
  );
}
