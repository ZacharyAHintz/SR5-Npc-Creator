import React, { useState, useEffect } from "react";
import styles from "../styles/GetCharacters.module.css";
import ToggleDialog from "./ToggleDialog";
import CharacterSheet from "./CharacterSheet";

export default function GetCharacters({ char }) {
  const [characters, setCharacters] = useState([]);
  const [contextMenu, setContextMenu] = useState(null);
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
      console.log(characters);

      return updatedCharacters;
    });
  };

  const handleRightClick = (e, character) => {
    e.preventDefault();
    setContextMenu({ mouseX: e.clientX, mouseY: e.clientY, character });
  };

  const handleRenameCharacter = () => {
    const newName = prompt(
      "Enter new character name:",
      contextMenu.character.name,
    );
    if (newName) {
      const updatedCharacters = characters.map((char) =>
        char.id === contextMenu.character.id
          ? { ...char, name: newName }
          : char,
      );

      setCharacters(updatedCharacters);
      localStorage.setItem("characters", JSON.stringify(updatedCharacters));

      setContextMenu(null);

      const event = new Event("charactersUpdated");
      window.dispatchEvent(event);
    }
  };

  const handleDeleteCharacter = () => {
    const updatedCharacters = characters.filter(
      (char) => char.id !== contextMenu.character.id,
    );

    setCharacters(updatedCharacters);
    localStorage.setItem("characters", JSON.stringify(updatedCharacters));

    setContextMenu(null);

    const event = new Event("charactersUpdated");
    window.dispatchEvent(event);
  };

  const handleCloseContextMenu = () => {
    setContextMenu(null);
  };

  return (
    <div className={styles.characterList} onClick={handleCloseContextMenu}>
      <div
        key={char.id}
        className={styles.characterItem}
        onContextMenu={(e) => handleRightClick(e, char)}
      >
        <input
          type="checkbox"
          checked={char.healthTracker || false}
          onChange={() => handleHealthTrackerToggle(char.id)}
        />
        <ToggleDialog name={char.name ? char.name : "Name"} id={char.id}>
          <CharacterSheet id={char.id} />
        </ToggleDialog>
      </div>

      {contextMenu && (
        <div
          className={styles.contextMenu}
          style={{
            top: contextMenu.mouseY,
            left: contextMenu.mouseX,
          }}
        >
          <button onClick={handleRenameCharacter}>Rename</button>
          <button onClick={handleDeleteCharacter}>Delete</button>
        </div>
      )}
    </div>
  );
}
