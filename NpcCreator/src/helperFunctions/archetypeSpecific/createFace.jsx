import getFaceStats from "./getFaceStats";
import getMentorSpirit from "./getMentorSpirit";
import getShamanStats from "./getShamanStats";
import getSpells from "./getSpells";
import getItems from "./getItems";
import setBaselineCyberware from "./setBaselineCyberware";
import getRandomObjectsFromDepth from "../getRandomObjectFromDepth";
import returnTraditions from "../../components/lists/returnTraditions";

const traditions = returnTraditions();
const specializations = ["Face Adept", "Face Mage", "Cyber Face"];

export default function createFace(character) {
  character.specialization = specializations[Math.floor(Math.random() * 3)];
  if (character.specialization !== "Face Mage") {
    getFaceStats(character);
    setBaselineCyberware(character);
  } else {
    const tradition = getRandomObjectsFromDepth(traditions, 2, 1);
    character.tradition = tradition;
    getMentorSpirit(character);
    getShamanStats(character);
    getSpells(character);
  }
  getItems(character);
}
