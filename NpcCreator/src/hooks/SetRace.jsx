export default function SetRace() {
  function setRaceBaseline(id) {
    const storedCharacters = JSON.parse(localStorage.getItem("characters"));
    const character = storedCharacters.find((char) => char.id === id);
    if ((character.race = "Randome")) {
      console.log("random");
    }
  }
}
