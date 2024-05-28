import React, { useRef, useState } from "react";
import styles from "../styles/CharacterSheet.module.css";
import MainTab from "./MainTab";

export default function CharacterSheet() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className={styles.container}>
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
          Social
        </div>
      </div>
      <div className={styles.contentTabs}>
        <div
          className={toggleState === 1 ? styles.activecontent : styles.content}
        >
          <MainTab />
        </div>
        <div
          className={toggleState === 2 ? styles.activecontent : styles.content}
        >
          <h2>Stats</h2>
        </div>
        <div
          className={toggleState === 3 ? styles.activecontent : styles.content}
        >
          <h2>Equitment</h2>
        </div>
        <div
          className={toggleState === 4 ? styles.activecontent : styles.content}
        >
          <h2>Equitment</h2>
        </div>
        <div
          className={toggleState === 5 ? styles.activecontent : styles.content}
        >
          <h2>Equitment</h2>
        </div>
        <div
          className={toggleState === 6 ? styles.activecontent : styles.content}
        >
          <h2>Equitment</h2>
        </div>
      </div>
    </div>
  );
}
