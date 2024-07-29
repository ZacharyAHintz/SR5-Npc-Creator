import React, { useState, useEffect } from "react";
import SpellsComponent from "../characterSheetComponents/SpellsComponent";
import getCharacterByID from "../../helperFunctions/getCharacterByID";
import AdeptPowersComponent from "../characterSheetComponents/AdeptPowersComponent";
import ComplexFormComponent from "../characterSheetComponents/ComplexFormComponent";

export default function SpellsTab({ id }) {
  const [character, setCharacter] = useState(getCharacterByID(id));

  return (
    <div>
      <hr />
      <div>
        {character.archetype === "Technomancer" ? (
          <ComplexFormComponent id={id} />
        ) : character.archetype === "Physical Adept" ? (
          <AdeptPowersComponent id={id} />
        ) : (
          <SpellsComponent id={id} />
        )}
      </div>
    </div>
  );
}
