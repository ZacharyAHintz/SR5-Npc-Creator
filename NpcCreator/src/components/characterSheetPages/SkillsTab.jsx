import React, { useState, useEffect } from "react";
import SkillsComponent from "../characterSheetComponents/SkillsComponent";
import getCharacterByID from "../../helperFunctions/getCharacterByID";
import styles from "../../styles/SharedTabs.module.css";

export default function SkillsTab({ id }) {
  const [character, setCharacter] = useState(getCharacterByID(id));
  const [currentCharacter, setCurrentCharacter] = useState(character);

  useEffect(() => {
    const storedCharacter = JSON.parse(localStorage.getItem("character"));
    if (storedCharacter) {
      setCurrentCharacter(storedCharacter);
    }
  }, []);

  return (
    <div className={styles.container}>
      <hr className={styles.separator} />
      <div>
        <SkillsComponent id={id} />
      </div>
    </div>
  );
}
