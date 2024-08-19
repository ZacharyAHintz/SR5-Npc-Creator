import React, { useState, useEffect } from "react";
import EnhancementsComponent from "../characterSheetComponents/EnhancementsComponent";
import getCharacterByID from "../../helperFunctions/getCharacterByID";
import styles from "../../styles/SharedTabs.module.css";

export default function EnhancementsTab({ id }) {
  const [character, setCharacter] = useState(getCharacterByID(id));

  useEffect(() => {
    const storedCharacter = JSON.parse(localStorage.getItem("character"));
    if (storedCharacter) {
      setCharacter(storedCharacter);
    }
  }, []);

  return (
    <div className={styles.container}>
      <hr className={styles.separator} />
      <div>
        <EnhancementsComponent id={id} />
      </div>
    </div>
  );
}
