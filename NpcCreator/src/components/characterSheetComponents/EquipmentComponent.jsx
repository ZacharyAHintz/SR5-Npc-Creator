import React, { useState, useEffect } from "react";
import getCharacterByID from "../../helperFunctions/getCharacterByID";

export default function EquipmentComponent({ id }) {
  const [character, setCharacter] = useState(getCharacterByID(id));

  const characterEquipment = character.misc || [];
  const security = character.security || [];

  let equipmentArray = [];
  Object.keys(characterEquipment).forEach((key) => {
    equipmentArray.push(characterEquipment[key]);
  });
  Object.keys(security).forEach((key) => {
    equipmentArray.push(security[key]);
  });

  return (
    <div>
      {equipmentArray.map((object, index) => {
        const name = object.name;
        const type = object.type;
        const book = object.source;

        return (
          <div key={`equipment-${index}`}>
            <p>
              {name}: "{type}"
            </p>
            <p>{book}</p>
          </div>
        );
      })}
    </div>
  );
}
