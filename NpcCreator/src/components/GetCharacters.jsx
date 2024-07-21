import React, { useState, useEffect } from "react";
import styles from "../styles/GetCharacters.module.css";

import ToggleDialog from "./ToggleDialog";
import CharacterSheet from "./CharacterSheet";

export default function GetCharacters() {
  const [characters, setCharacters] = useState([]);

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

  return (
    <div>
      <div>
        {characters.map((char) => (
          <div key={char.id}>
            <ToggleDialog name={char.name ? char.name : "Name"}>
              <CharacterSheet id={char.id} />
            </ToggleDialog>
          </div>
        ))}
      </div>
    </div>
  );
}
