export default function getCharacterByID(id) {
  const characters = JSON.parse(localStorage.getItem("characters"));
  if (!characters) {
    return null;
  }
  const character = characters.find((char) => char.id === id);
  if (!character) {
    return null;
  }
  return character;
}
