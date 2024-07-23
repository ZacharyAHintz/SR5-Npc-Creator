import React, { useState, useEffect } from "react";
import WeaponsComponent from "../characterSheetComponents/WeaponsComponent";
import getCharacterByID from "../../helperFunctions/getCharacterByID";

export default function EquipmentTab({ id }) {
  const [character, setCharacter] = useState(getCharacterByID(id));

  return (
    <div>
      <hr />
      <div>
        <WeaponsComponent id={id} />
      </div>
    </div>
  );
}
