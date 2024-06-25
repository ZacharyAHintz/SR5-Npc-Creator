import React, { useState } from "react";
import styles from "../styles/NpcOptions.module.css";
import NewCharacterButton from "./NewCharacterButton";
import ToggleDialog from "./ToggleDialog";
import returnRaces from "./lists/returnRaces";
import returnSkills from "./lists/returnSkills";
import getRandomObjectFromDepth from "../helperFunctions/getRandomObjectFromDepth";
import getStartingSkillValues from "../helperFunctions/getStartingSkillValues";
import shamanArchetypeSkills from "./lists/returnShamanArchitypeSkills";
import streetSamuraiArchetypeSkills from "./lists/returnStreetSamuraiArchetypeSkills";
import deckerArchetypeSkills from "./lists/returnDeckerArchetypeSkills";
import technomancerArchetypeSkills from "./lists/returnTechnomancerArchetypeSkills";
import faceArchetypeSkills from "./lists/returnFaceArchetypeSkills";
import riggerArchetypeSkills from "./lists/returnRiggerArchetypeSkills";
import physicalAdeptArchetypeSkills from "./lists/returnPhysicalAdeptArchetypeSkills";
import corpoArchetypeSkills from "./lists/returnCorpoArchetypeSkills";
import getRandomObjectByKey from "../helperFunctions/getRandomeObjectByKey";
import determineGearRequirements from "../helperFunctions/determineGearRequirements";
import returnWeapons from "./lists/returnWeapon";
import returnVehicles from "./lists/returnVehicles";
import returnDrones from "./lists/returnDrones";
import returnAmmo from "./lists/returnAmmo";
import createShaman from "../helperFunctions/archetypeSpecific/createShaman";
//enter need to finish the submit every time
export default function NpcOptions({ toggleDialog }) {
  const [name, setName] = useState("");
  const [race, setRace] = useState("Random");
  const [rating, setRating] = useState("Random");
  const [gender, setGender] = useState("Random");
  const [archetype, setArchetype] = useState("Random");

  const races = returnRaces();
  const skills = returnSkills();
  const weapons = returnWeapons();
  const vehicles = returnVehicles();
  const drones = returnDrones();
  const ammo = returnAmmo();

  const archetypes = [
    "Shaman",
    "Street Samurai",
    "Decker",
    "Technomancer",
    "Face",
    "Rigger",
    "Physical Adept",
    "Corpo",
  ];

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

    // Randomizers
    if (rating === "Random") {
      character.rating = Math.floor(Math.random() * 6) + 1;
    }

    if (gender === "Random") {
      character.gender = Math.random() < 0.5 ? "Male" : "Female";
    }

    if (archetype === "Random") {
      const randomIndex = Math.floor(Math.random() * 8);
      character.archetype = archetypes[randomIndex];
    }

    if (race === "Random") {
      const raceSelection = getRandomObjectFromDepth(races, 2, 1);
      character.race = raceSelection;
      console.log(character.race);
    }

    // Skill selection
    // prettier-ignore
    const archetypeSkillFunctions = {
      "Shaman": shamanArchetypeSkills,
      "Street Samurai": streetSamuraiArchetypeSkills,
      "Decker": deckerArchetypeSkills,
      "Technomancer": technomancerArchetypeSkills,
      "Face": faceArchetypeSkills,
      "Rigger": riggerArchetypeSkills,
      "Physical Adept": physicalAdeptArchetypeSkills,
      "Corpo": corpoArchetypeSkills,
    };

    const archetypeSkills = archetypeSkillFunctions[character.archetype]();
    const skillAmount = character.rating * 3 + 5;
    const archetypeSkillAmount = character.rating + 2;
    const archetypeSkillSelection = getStartingSkillValues(
      getRandomObjectFromDepth(archetypeSkills, 1, archetypeSkillAmount),
      Number(character.rating),
    );

    let skillSelection = getStartingSkillValues(
      getRandomObjectFromDepth(skills, 2, skillAmount),
      Number(character.rating),
    );

    function mergeSkills(archetypeSkills, skills) {
      const combinedSkills = { ...archetypeSkills };

      for (const skill in skills) {
        if (!combinedSkills.hasOwnProperty(skill)) {
          combinedSkills[skill] = skills[skill];
        }
      }

      return combinedSkills;
    }

    const combinedSkillSelection = mergeSkills(
      archetypeSkillSelection,
      skillSelection,
    );
    character.skills = combinedSkillSelection;

    // Item selection based on skills
    const gearList = determineGearRequirements(character);

    function processGearRequirements(gearRequirementsList) {
      const gear = [];
      const vehicles = [];
      const weapons = [];

      for (const category in gearRequirementsList) {
        if (gearRequirementsList.hasOwnProperty(category)) {
          for (const item of gearRequirementsList[category]) {
            const [obj, itemKey, keyDepth, amount] = item;
            const randomObject = getRandomObjectByKey(
              obj,
              itemKey,
              keyDepth,
              amount,
            );

            if (category === "vehicle") {
              vehicles.push(randomObject);
            } else if (category === "weapon" || category === "ammo") {
              weapons.push(randomObject);
            } else {
              gear.push(randomObject);
            }
          }
        }
      }

      return { gear, vehicles, weapons };
    }

    character.gear = processGearRequirements(gearList);

    // Archetype specific selections
    if (character.archetype === "Shaman") {
      createShaman(character);
    }

    // Save character to localStorage
    const storedCharacters =
      JSON.parse(localStorage.getItem("characters")) || [];
    const characterExists = storedCharacters.some(
      (char) => char.id === character.id,
    );

    if (!characterExists) {
      storedCharacters.push(character);
      localStorage.setItem("characters", JSON.stringify(storedCharacters));

      const event = new CustomEvent("characterAdded", {
        detail: { character },
      });
      window.dispatchEvent(event);
    }

    console.log(JSON.parse(localStorage.getItem("characters")));
  }

  const handleRaceChange = (e) => {
    const selectedRace = e.target.value;

    if (selectedRace === "Metasapients") {
      setRace("Centaur");
      document.getElementById("Metasapients").classList.remove(styles.hidden);
      document.getElementById("Metasapients").classList.add(styles.input);
      document.getElementById("Infected").classList.remove(styles.input);
      document.getElementById("Infected").classList.add(styles.hidden);
      document.getElementById("Metavariants").classList.remove(styles.input);
      document.getElementById("Metavariants").classList.add(styles.hidden);
    } else if (selectedRace === "Metavariants") {
      setRace("gnome");
      document.getElementById("Metavariants").classList.remove(styles.hidden);
      document.getElementById("Metavariants").classList.add(styles.input);
      document.getElementById("Metasapients").classList.remove(styles.input);
      document.getElementById("Metasapients").classList.add(styles.hidden);
      document.getElementById("Infected").classList.remove(styles.input);
      document.getElementById("Infected").classList.add(styles.hidden);
    } else if (selectedRace === "Infected") {
      setRace("Bandersnatch");
      document.getElementById("Infected").classList.remove(styles.hidden);
      document.getElementById("Infected").classList.add(styles.input);
      document.getElementById("Metasapients").classList.remove(styles.input);
      document.getElementById("Metasapients").classList.add(styles.hidden);
      document.getElementById("Metavariants").classList.remove(styles.input);
      document.getElementById("Metavariants").classList.add(styles.hidden);
    } else {
      setRace(selectedRace);
      document.getElementById("Metasapients").classList.remove(styles.input);
      document.getElementById("Metasapients").classList.add(styles.hidden);
      document.getElementById("Metavariants").classList.remove(styles.input);
      document.getElementById("Metavariants").classList.add(styles.hidden);
      document.getElementById("Infected").classList.remove(styles.input);
      document.getElementById("Infected").classList.add(styles.hidden);
    }
  };

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
            onChange={handleRaceChange}
            id="race"
          >
            <option value="Random">Random</option>
            <option value="Human">Human</option>
            <option value="Elf">Elf</option>
            <option value="Dwarf">Dwarf</option>
            <option value="Ork">Ork</option>
            <option value="Troll">Troll</option>
            <option value="Metasapients">Metasapients</option>
            <option value="Metavariants">Metavariants</option>
            <option value="Infected">Infected</option>
          </select>
          <select
            className={styles.hidden}
            id="Metasapients"
            onChange={(e) => setRace(e.target.value)}
          >
            <option value="Centaur">Centaur</option>
            <option value="Naga">Naga</option>
            <option value="Pixie">Pixie</option>
            <option value="Sasquatch">Sasquatch</option>
          </select>
          <select
            className={styles.hidden}
            id="Metavariants"
            onChange={(e) => setRace(e.target.value)}
          >
            <option value="Gnome">Gnome</option>
            <option value="Hanuman">Hanuman</option>
            <option value="Koborokuru">Koborokuru</option>
            <option value="Menehune">Menehune</option>
            <option value="Dryad">Dryad</option>
            <option value="Nocturna">Nocturna</option>
            <option value="Wakyambi">Wakyambi</option>
            <option value="Xapiri Thëpë">Xapiri Thëpë</option>
            <option value="Nartaki">Nartaki</option>
            <option value="Hobgoblin">Hobgoblin</option>
            <option value="Ogre">Ogre</option>
            <option value="Oni">Oni</option>
            <option value="Satyr">Satyr</option>
            <option value="Cyclops">Cyclops</option>
            <option value="Fomorian">Fomorian</option>
            <option value="Giant">Giant</option>
            <option value="Minotaur">Minotaur</option>
          </select>
          <select
            className={styles.hidden}
            id="Infected"
            onChange={(e) => setRace(e.target.value)}
          >
            <option value="Bandersnatch">Bandersnatch</option>
            <option value="Banshee">Banshee</option>
            <option value="Dzoo-noo-qua">Dzoo-noo-qua</option>
            <option value="Fomóraig">Fomóraig</option>
            <option value="Ghoul (Dwarf)">Ghoul (Dwarf)</option>
            <option value="Ghoul (Elf)">Ghoul (Elf)</option>
            <option value="Ghoul (Human)">Ghoul (Human)</option>
            <option value="Ghoul (Ork)">Ghoul (Ork)</option>
            <option value="Ghoul (Sasquatch)">Ghoul (Sasquatch)</option>
            <option value="Ghoul (Troll)">Ghoul (Troll)</option>
            <option value="Goblin">Goblin</option>
            <option value="Grendel">Grendel</option>
            <option value="Harvester">Harvester</option>
            <option value="Loup-garou">Loup-garou</option>
            <option value="Mutaqua">Mutaqua</option>
            <option value="Nosferatu">Nosferatu</option>
            <option value="Vampire">Vampire</option>
            <option value="Wendigo">Wendigo</option>
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
            <option value="Physical Adept">Physical adept</option>
            <option value="Corpo">Corpo</option>
          </select>
          <br />
          <input className={styles.input} type="submit" />
        </div>
      </form>
    </main>
  );
}
