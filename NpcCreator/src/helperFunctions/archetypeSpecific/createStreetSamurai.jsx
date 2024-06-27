import getStreetSamuraiStats from "./getStreetSamuraiStats";

export default function createStreetSamurai(character) {
  getStreetSamuraiStats(character);
  character.stats.magic = 0;
}
