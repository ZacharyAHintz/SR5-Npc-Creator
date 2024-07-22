import React, { useState, useEffect } from "react";
import getCharacterByID from "../../helperFunctions/getCharacterByID";

export default function EnhancementsComponent({ id }) {
  const [character, setCharacter] = useState(getCharacterByID(id));

  const characterEnhancements = character.cyberware || [];

  const devices = characterEnhancements.map((enhancement) => {
    const key = Object.keys(enhancement)[0];
    return enhancement[key].device;
  });

  return (
    <div>
      {devices.length > 0 ? (
        <ul>
          {devices.map((device, index) => (
            <li key={index}>{device}</li>
          ))}
        </ul>
      ) : (
        <p>No Cyberware</p>
      )}
    </div>
  );
}
