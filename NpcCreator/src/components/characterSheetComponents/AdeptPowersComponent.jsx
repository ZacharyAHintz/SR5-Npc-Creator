import React, { useState } from "react";
import getCharacterByID from "../../helperFunctions/getCharacterByID";
import styles from "../../styles/AdeptPowersComponent.module.css";

export default function AdeptPowersComponent({ id }) {
  const [character, setCharacter] = useState(getCharacterByID(id));

  const adeptPowers = character.adeptPowers?.flat() || [];

  return (
    <div className={styles.adeptPowersContainer}>
      {adeptPowers.map((power, index) => (
        <div key={index} className={styles.adeptPower}>
          <h3>{power.power}</h3>
          <p>Source: {power.source}</p>
        </div>
      ))}
    </div>
  );
}
