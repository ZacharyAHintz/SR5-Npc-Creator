import getCyberware from "./getCyberware";
import getStreetSamuraiStats from "./getStreetSamuraiStats";
import getItems from "./getItems";

const specializations = ["Cyberzombie", "Gun Bunny", "Razor Boy"];

export default function createStreetSamurai(character) {
  character.specialization = specializations[Math.floor(Math.random() * 3)];
  getStreetSamuraiStats(character);
  character.stats.magic = 0;
  getCyberware(character);
  getItems(character);
}
