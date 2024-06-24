import returnTraditions from "../../components/lists/returnTraditions";
import getRandomObjectsFromDepth from "../getRandomObjectFromDepth";
import getMentorSpirit from "./getMentorSpirit";

const traditions = returnTraditions();
const specializations = [
  "Summoner",
  "Anti-Magic",
  "Astral",
  "Ritual",
  "Spellcasting",
  "Alchemist",
  "Manipulation",
  "Healer",
  "Blood",
  "Possession",
  "Insect",
];
// roll randomely for specialization unless tradition.name is "Qabbalism"

// -- get their tradition
// -- get their mentor spirit
// -- add in their mentor spirit bonuses
//create specialization
//imput their stats
//add in items / weapons / vehicles
//add ammo
//add armor

export default function createShaman(character) {
  const tradition = getRandomObjectsFromDepth(traditions, 0, 1);
  character.tradition = tradition;
  getMentorSpirit(character);
  if (traditions.name !== "Qabbalism") {
    character.specialization = specializations[Math.floor(Math.random() * 11)];
  } else {
    character.specialization = "Possession";
  }
}
