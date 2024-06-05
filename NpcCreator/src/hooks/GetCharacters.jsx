import React, { useState, useEffect } from "react";
import styles from "../styles/GetCharacters.module.css";
import CharacterSheetButtons from "../components/CharacterSheetButton";
import ToggleDialog from "./ToggleDialog";
import CharacterSheet from "../components/CharacterSheet";
import Navbar from "../components/Navbar";

export default function GetCharacters() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  useEffect(() => {
    updateCharactersFromLocalStorage();

    const handleCharacterAdded = (e) => {
      updateCharactersFromLocalStorage();
    };
    const handleLocalStorageCleared = () => {
      setCharacters([]);
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
    const storedCharacters = JSON.parse(localStorage.getItem("characters"));
    if (storedCharacters) {
      setCharacters(storedCharacters);
    } else {
      setCharacters([]);
    }
  };

  const handleButtonPress = (id) => {
    const character = characters.find((char) => char.id === id);
    if (character) {
      setSelectedCharacter(character);
    }
  };

  return (
    <div>
      <div>
        <CharacterSheetButtons />
        {characters.map((char) => (
          <button key={char.id} onClick={() => handleButtonPress(char.id)}>
            {char.name ? char.name : "name"}
          </button>
        ))}
      </div>
      {selectedCharacter && (
        <ToggleDialog name={selectedCharacter.name}>
          <CharacterSheet character={selectedCharacter} />
        </ToggleDialog>
      )}
    </div>
  );
}
