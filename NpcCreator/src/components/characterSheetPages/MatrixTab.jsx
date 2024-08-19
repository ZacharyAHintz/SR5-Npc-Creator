import React, { useState, useEffect } from "react";
import MatrixComponent from "../characterSheetComponents/MatrixComponent";
import getCharacterByID from "../../helperFunctions/getCharacterByID";
import styles from "../../styles/SharedTabs.module.css";

export default function MatrixTab({ id }) {
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
      <h2 className={styles.header}>Comlinks</h2>
      <div>
        <MatrixComponent id={id} />
      </div>
    </div>
  );
}
