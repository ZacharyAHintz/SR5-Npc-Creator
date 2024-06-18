import { useContext } from "react";
import { RaceContext } from "../components/lists/RaceList";
import useRandomObjectFromDepth from "./useRandomObjectFromDepth";

export function useSetRaceBaseline() {
  const races = useContext(RaceContext);

  return function setRaceBaseline(id) {
    const storedCharacters =
      JSON.parse(localStorage.getItem("characters")) || [];

    if (!storedCharacters) {
      console.error("No characters found in localStorage");
      return;
    }

    const character = storedCharacters.find((char) => char.id === id);

    if (character && character.race === "Random") {
      const assignedRace = useRandomObjectFromDepth(races, 2);
      character.race = assignedRace;
      localStorage.setItem("characters", JSON.stringify(storedCharacters));
      console.log("Race set to AssignedRace for character ID:", id);
    }
  };
}
