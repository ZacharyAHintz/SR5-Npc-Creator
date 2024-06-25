import React, { useState, useEffect } from "react";
import styles from "../styles/GetCharacters.module.css";
import CharacterSheetButtons from "./CharacterSheetButton";
import ToggleDialog from "./ToggleDialog";
import CharacterSheet from "./CharacterSheet";
import Navbar from "./Navbar";

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
        {characters.map((char) => (
          <div key={char.id}>
            <ToggleDialog name={char.name ? char.name : "Name"}>
              <CharacterSheet character={char} />
            </ToggleDialog>
          </div>
        ))}
      </div>
    </div>
  );
}
