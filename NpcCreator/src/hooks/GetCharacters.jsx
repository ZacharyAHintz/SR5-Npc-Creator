import React, { useState, useEffect } from "react";
import styles from "../styles/GetCharacters.module.css";
import CharacterSheetButtons from "../components/CharacterSheetButton";

export default function GetCharacters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const storedCharacters = JSON.parse(localStorage.getItem("characters"));
    if (storedCharacters) {
      setCharacters(storedCharacters);
    }
  }, []);
  // when handleButtonPress is called, it open CharacterSheetButtons with the character's id

  // const handleButtonPress = (id) => {
  //   const character = characters.find((char) => char.id === id);
  //   if (character && !sidebarButtons.some((button) => button.id === id)) {
  //     setSidebarButtons([...sidebarButtons, character]);
  //   }
  // };
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
    </div>
  );
}
