import React, { useState, useEffect } from "react";
import EnhancementsComponent from "../characterSheetComponents/EnhancementsComponent";
import getCharacterByID from "../../helperFunctions/getCharacterByID";

export default function EnhancementsTab({ id }) {
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
        <EnhancementsComponent id={id} />
      </div>
    </div>
  );
}
