import React, { useState, useEffect } from "react";
import getCharacterByID from "../../helperFunctions/getCharacterByID";

export default function EquipmentComponent({ id }) {
  const [character, setCharacter] = useState(getCharacterByID(id));

  const characterEquipment = character.misc || [];

  let equipmentArray = [];
  Object.keys(characterEquipment).forEach((key) => {
    equipmentArray.push(characterEquipment[key]);
  });

  return (
    <div>
      {equipmentArray.map((object) => {
        const name = object.name;
        const book = object.source;

        return (
          <div>
            <p>
              {name}: {book}
            </p>
          </div>
        );
      })}
    </div>
  );
}
