export function setRaceBaseline(id) {
  const storedCharacters = JSON.parse(localStorage.getItem("characters"));
  const character = storedCharacters.find((char) => char.id === id);
  if (character && character.race === "Random") {
    character.race = "AssignedRace";
    localStorage.setItem("characters", JSON.stringify(storedCharacters));
    console.log("Race set to AssignedRace for character ID:", id);
  }
}
