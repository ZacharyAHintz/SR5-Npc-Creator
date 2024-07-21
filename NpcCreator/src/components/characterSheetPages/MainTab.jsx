import React, { useState, useEffect } from "react";
import StatsComponent from "../characterSheetComponents/StatsComponent";
import getCharacterByID from "../../helperFunctions/getCharacterByID";

export default function MainTab({ id }) {
  const [character, setCharacter] = useState(getCharacterByID(id));

  useEffect(() => {
    const storedCharacter = JSON.parse(localStorage.getItem("character"));
    if (storedCharacter) {
      setCharacter(storedCharacter);
    }
  }, []);

  return (
    <div>
      <h2>Attributes</h2>
      <hr />
      <div>
        {character?.id && <h3>{character.id}</h3>}
        <StatsComponent id={id} />
      </div>
    </div>
  );
}
