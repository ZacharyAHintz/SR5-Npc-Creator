import getCyberware from "./getCyberware";
import getDeckerStats from "./getDeckerStats";
import getItems from "./getItems";
import setBaselineCyberware from "./setBaselineCyberware";

const specializations = [
  "Butcher",
  "Corporate Spider",
  "NetNinjas",
  "GOD",
  "VR Legion",
];
export default function createDecker(character) {
  character.specialization = specializations[Math.floor(Math.random() * 4)];
  if (character.specialization === "Butcher") {
    getCyberware(character);
  }

  getDeckerStats(character);
  setBaselineCyberware(character);
  getItems(character);
}
