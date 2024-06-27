import returnTraditions from "../../components/lists/returnTraditions";
import getItems from "./getItems";
import getRandomObjectsFromDepth from "../getRandomObjectFromDepth";
import getMentorSpirit from "./getMentorSpirit";
import getShamanStats from "./getShamanStats";
import getSpells from "./getSpells";
import getAmmo from "./getAmmo";

const traditions = returnTraditions();
const specializations = [
  "Summoner",
  "Anti-Magic",
  "Astral Combatant",
  "Ritualist",
  "Spellcaster",
  "Alchemist",
  "Manipulator",
  "Healer",
  "Blood Mage",
  "Witch Doctor",
  "Insect Shaman",
];
// roll randomely for specialization unless tradition.name is "Qabbalism"

// -- get their tradition
// -- get their mentor spirit
// -- add in their mentor spirit bonuses
// -- create specialization
// -- imput their stats
//add in items / weapons / vehicles
//add ammo
//add armor

export default function createShaman(character) {
  const tradition = getRandomObjectsFromDepth(traditions, 2, 1);

  character.tradition = tradition;
  getMentorSpirit(character);
  if (traditions.name !== "Qabbalism") {
    character.specialization = specializations[Math.floor(Math.random() * 11)];
  } else {
    character.specialization = "Witch Doctor";
  }
  getShamanStats(character);
  getSpells(character);
  getItems(character);
}
