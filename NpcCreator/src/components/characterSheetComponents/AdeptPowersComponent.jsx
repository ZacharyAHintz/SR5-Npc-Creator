import React, { useState, useEffect } from "react";
import getCharacterByID from "../../helperFunctions/getCharacterByID";

export default function AdeptPowersComponent({ id }) {
  const [character, setCharacter] = useState(getCharacterByID(id));

  const adeptPowers = character.adeptPowers || [];

  const flattenedAdeptPowers = adeptPowers.flat();

  return (
    <div>
      {flattenedAdeptPowers.map((object, index) => (
        <div key={index}>
          <h3>{object.power}</h3>

          <p>Source: {object.source}</p>
        </div>
      ))}
    </div>
  );
}
