export default function updateCharacterInLocalStorage(id, updatedCharacter) {
  const characters = JSON.parse(localStorage.getItem("characters"));
  if (!characters) {
    return null;
  }

  const index = characters.findIndex((char) => char.id === id);
  if (index === -1) {
    return null;
  }

  characters[index] = updatedCharacter;
  localStorage.setItem("characters", JSON.stringify(characters));
}
