export default function updateCharacterInLocalStorage(id, updatedCharacter) {
  const storedCharacters = JSON.parse(localStorage.getItem("characters")) || [];

  const characterIndex = storedCharacters.findIndex((char) => char.id === id);

  if (characterIndex !== -1) {
    storedCharacters[characterIndex] = updatedCharacter;

    localStorage.setItem("characters", JSON.stringify(storedCharacters));

    const currentCharacter = JSON.parse(localStorage.getItem("character"));
    if (currentCharacter && currentCharacter.id === id) {
      localStorage.setItem("character", JSON.stringify(updatedCharacter));
    }
  }
}
