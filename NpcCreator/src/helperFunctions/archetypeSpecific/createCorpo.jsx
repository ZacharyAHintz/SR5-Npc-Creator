import getCyberware from "./getCyberware";
import getStreetSamuraiStats from "./getStreetSamuraiStats";
import getFaceStats from "./getFaceStats";

const specializations = ["Mr. Johnson", "HTR", "Corporate Security"];

export default function createCorpo(character) {
  character.specialization = specializations[Math.floor(Math.random() * 4)];
  if (character.specialization === "Mr. Johnson") {
    getFaceStats(character);
  } else {
    getStreetSamuraiStats(character);
  }

  getCyberware(character);
}
