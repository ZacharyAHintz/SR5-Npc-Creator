import React, { useState, useEffect } from "react";
import StatsComponent from "../characterSheetComponents/StatsComponent";
import getCharacterByID from "../../helperFunctions/getCharacterByID";
import styles from "../../styles/SharedTabs.module.css";

export default function MainTab({ id }) {
  const [character, setCharacter] = useState(getCharacterByID(id));

  useEffect(() => {
    const storedCharacter = JSON.parse(localStorage.getItem("character"));
    if (storedCharacter) {
      setCharacter(storedCharacter);
    }
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Attributes</h2>
      <hr className={styles.separator} />
      <div>
        <StatsComponent id={id} />
      </div>
    </div>
  );
}
