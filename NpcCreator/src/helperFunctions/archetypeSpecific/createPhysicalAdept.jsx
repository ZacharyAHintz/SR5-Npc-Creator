import returnTraditions from "../../components/lists/returnTraditions";
import getRandomObjectsFromDepth from "../getRandomObjectFromDepth";
import getMentorSpirit from "./getMentorSpirit";
import getShamanStats from "./getShamanStats";
import getStreetSamuraiStats from "./getStreetSamuraiStats";
import getItems from "./getItems";
import getFaceStats from "./getFaceStats";

const traditions = returnTraditions();

const specializations = [
  "Physical Adept",
  "Anti-Mage",
  "Mysic Adept",
  "Social Adept",
  "Burnt Adept",
];

export default function createPhysicalAdept(character) {
  const tradition = getRandomObjectsFromDepth(traditions, 2, 1);
  character.specialization = specializations[Math.floor(Math.random() * 5)];
  character.tradition = tradition;

  getMentorSpirit(character);

  if (character.specialization === "Burnt Adept") {
    getStreetSamuraiStats(character);
    getShamanStats(character);
  } else if (character.specialization === "Social Adept") {
    getFaceStats(character);
  } else {
    getShamanStats(character);
  }

  getItems(character);
}
