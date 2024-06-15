import { useState } from "react";
import styles from "../styles/NpcOptions.module.css";
import NewCharacterButton from "./NewCharacterButton";
import ToggleDialog from "./ToggleDialog";
import { setRaceBaseline } from "../hooks/SetRace";

export default function NpcOptions({ toggleDialog }) {
  const [name, setName] = useState("");
  const [race, setRace] = useState("Random");
  const [rating, setRating] = useState("Random");
  const [gender, setGender] = useState("Random");
  const [archetype, setArchetype] = useState("Random");

  function handleSubmit(e) {
    let id = crypto.randomUUID();
    e.preventDefault();
    let character = {
      id,
      name,
      race,
      rating,
      gender,
      archetype,
    };

    const storedCharacters =
      JSON.parse(localStorage.getItem("characters")) || [];
    const characterExists = storedCharacters.some(
      (char) => char.id === character.id,
    );

    if (!characterExists) {
      storedCharacters.push(character);
      localStorage.setItem("characters", JSON.stringify(storedCharacters));

      setRaceBaseline(id);

      const event = new CustomEvent("characterAdded", {
        detail: { character },
      });
      window.dispatchEvent(event);
    }

    console.log(JSON.parse(localStorage.getItem("characters")));
  }

  return (
    <main className={styles.container}>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
          toggleDialog(e);
        }}
        className={styles.form}
      >
        <div className={styles.header}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input
            className={styles.input}
            onChange={(e) => setName(e.target.value)}
            type="name"
            placeholder="Name"
            value={name}
          />
          <br />
          <label className={styles.label} htmlFor="rating">
            Rating
          </label>
          <select
            className={styles.input}
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            id="rating"
          >
            <option value="Random">Random</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          <br />
          <label className={styles.label} htmlFor="race">
            Race
          </label>
          <select
            className={styles.input}
            value={race}
            onChange={(e) => setRace(e.target.value)}
            id="race"
          >
            <option value="Random">Random</option>
            <option value="Human">Human</option>
            <option value="Elf">Elf</option>
            <option value="Dwarf">Dwarf</option>
            <option value="Ork">Ork</option>
            <option value="Troll">Troll</option>
            <option value="Centaur">Centaur</option>
            <option value="Naga">Naga</option>
            <option value="Pixie">Pixie</option>
            <option value="Sasquatch">Sasquatch</option>
          </select>
          <br />
          <label className={styles.label} htmlFor="Gender">
            Gender
          </label>
          <select
            className={styles.input}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            id="Gender"
          >
            <option value="Random">Random</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
          <br />
          <label className={styles.label} htmlFor="Archetype">
            Archetype
          </label>
          <select
            className={styles.input}
            value={archetype}
            onChange={(e) => setArchetype(e.target.value)}
            id="Archetype"
          >
            <option value="Random">Random</option>
            <option value="Shaman">Shaman</option>
            <option value="Street Samurai">Street Samurai</option>
            <option value="Decker">Decker</option>
            <option value="Technomancer">Technomancer</option>
            <option value="Face">Face</option>
            <option value="Rigger">Rigger</option>
            <option value="Physical adept">Physical adept</option>
            <option value="Corpo">Corpo</option>
          </select>
          <br />
          <input className={styles.input} type="submit"></input>
        </div>
      </form>
    </main>
  );
}
