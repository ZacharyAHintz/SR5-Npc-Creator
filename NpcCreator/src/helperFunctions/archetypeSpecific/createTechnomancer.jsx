import getTechnomancerStats from "./getTechnomancerStats";
import getCyberware from "./getCyberware";
import getItems from "./getItems";
import setBaselineCyberware from "./setBaselineCyberware";

const specializations = [
  "Otaku",
  "Decknomancer",
  "Petnomancer",
  "Cyberspike Assasin",
  "Diagnostic 'Rigger'",
];
export default function createTechnomancer(character) {
  character.specialization = specializations[Math.floor(Math.random() * 5)];
  if (character.specialization !== "Cyberspike Assasin") {
    getTechnomancerStats(character);
  } else {
    setBaselineCyberware(character);
  }
  getItems(character);
}
