import React, { useState, useEffect } from "react";
import styles from "../styles/GetCharacters.module.css";
import ToggleDialog from "./ToggleDialog";
import CharacterSheet from "./CharacterSheet";

export default function GetCharacters({ char }) {
  const [characters, setCharacters] = useState([]);
  const activeTab = localStorage.getItem("activeTab");

  useEffect(() => {
    updateCharactersFromLocalStorage();

    const handleCharacterAdded = () => {
      updateCharactersFromLocalStorage();
      const event = new Event("charactersUpdated");
      window.dispatchEvent(event);
    };

    const handleLocalStorageCleared = () => {
      setCharacters([]);
      const event = new Event("charactersUpdated");
      window.dispatchEvent(event);
    };

    window.addEventListener("characterAdded", handleCharacterAdded);
    window.addEventListener("localStorageCleared", handleLocalStorageCleared);

    return () => {
      window.removeEventListener("characterAdded", handleCharacterAdded);
      window.removeEventListener(
        "localStorageCleared",
        handleLocalStorageCleared,
      );
    };
  }, []);

  const updateCharactersFromLocalStorage = () => {
    const storedCharacters =
      JSON.parse(localStorage.getItem("characters")) || [];
    setCharacters(storedCharacters);
  };

  const handleHealthTrackerToggle = (id) => {
    setCharacters((prevCharacters) => {
      const updatedCharacters = prevCharacters.map((char) =>
        char.id === id ? { ...char, healthTracker: !char.healthTracker } : char,
      );

      localStorage.setItem("characters", JSON.stringify(updatedCharacters));

      const event = new Event("charactersUpdated");
      window.dispatchEvent(event);

      return updatedCharacters;
    });
  };

  return (
    <div className={styles.characterList}>
      <div key={char.id} className={styles.characterItem}>
        <input
          type="checkbox"
          checked={char.healthTracker || false}
          onChange={() => handleHealthTrackerToggle(char.id)}
        />
        <ToggleDialog name={char.name ? char.name : "Name"}>
          <CharacterSheet id={char.id} />
        </ToggleDialog>
      </div>
    </div>
  );
}
