import React, { useState, useEffect } from "react";
import SpellsComponent from "../characterSheetComponents/SpellsComponent";
import getCharacterByID from "../../helperFunctions/getCharacterByID";

export default function SpellsTab({ id }) {
  const [character, setCharacter] = useState(getCharacterByID(id));

  useEffect(() => {
    const storedCharacter = JSON.parse(localStorage.getItem("character"));
    if (storedCharacter) {
      setCharacter(storedCharacter);
    }
  }, []);

  return (
    <div>
      <hr />
      <div>
        <SpellsComponent id={id} />
      </div>
    </div>
  );
}
