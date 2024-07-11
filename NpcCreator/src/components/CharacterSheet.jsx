import React, { useState, useEffect } from "react";
import styles from "../styles/CharacterSheet.module.css";
import MainTab from "./characterSheetPages/MainTab";
import SkillsTab from "./characterSheetPages/SkillsTab";

export default function CharacterSheet({ name, character }) {
  const [toggleState, setToggleState] = useState(1);
  const [currentCharacter, setCurrentCharacter] = useState(character);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedCharacter = JSON.parse(localStorage.getItem("character"));
      if (updatedCharacter) {
        setCurrentCharacter(updatedCharacter);
      }
    };

    window.addEventListener("characterAdded", handleStorageChange);
    window.addEventListener("localStorageCleared", handleStorageChange);
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("characterAdded", handleStorageChange);
      window.removeEventListener("localStorageCleared", handleStorageChange);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className={styles.container}>
      <h3>{currentCharacter.name}</h3>
      <h3>{currentCharacter.stats.body.baseStats}</h3>
      <hr />
      <div className={styles.blockTabs}>
        <div
          onClick={() => toggleTab(1)}
          className={toggleState === 1 ? styles.activeTab : styles.tabs}
        >
          Main
        </div>
        <div
          onClick={() => toggleTab(2)}
          className={toggleState === 2 ? styles.activeTab : styles.tabs}
        >
          Skills
        </div>
        <div
          onClick={() => toggleTab(3)}
          className={toggleState === 3 ? styles.activeTab : styles.tabs}
        >
          Enhancements
        </div>
        <div
          onClick={() => toggleTab(4)}
          className={toggleState === 4 ? styles.activeTab : styles.tabs}
        >
          Matrix
        </div>
        <div
          onClick={() => toggleTab(5)}
          className={toggleState === 5 ? styles.activeTab : styles.tabs}
        >
          Equipment
        </div>
        <div
          onClick={() => toggleTab(6)}
          className={toggleState === 6 ? styles.activeTab : styles.tabs}
        >
          Spells
        </div>
      </div>
      <div className={styles.contentTabs}>
        <div
          className={toggleState === 1 ? styles.activecontent : styles.content}
        >
          <MainTab character={currentCharacter} />
        </div>
        <div
          className={toggleState === 2 ? styles.activecontent : styles.content}
        >
          <h2>Skills</h2>
          <SkillsTab character={currentCharacter} />
        </div>
        <div
          className={toggleState === 3 ? styles.activecontent : styles.content}
        >
          <h2>Enhancements</h2>
        </div>
        <div
          className={toggleState === 4 ? styles.activecontent : styles.content}
        >
          <h2>Matrix</h2>
        </div>
        <div
          className={toggleState === 5 ? styles.activecontent : styles.content}
        >
          <h2>Equipment</h2>
        </div>
        <div
          className={toggleState === 6 ? styles.activecontent : styles.content}
        >
          <h2>Spells</h2>
        </div>
      </div>
    </div>
  );
}
