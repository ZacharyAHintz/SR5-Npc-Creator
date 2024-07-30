import getRandomeObjectByPrice from "../getRandomeObjectByPrice";
import getCyberware from "./getCyberware";
import getDeckerStats from "./getDeckerStats";
import getItems from "./getItems";
import setBaselineCyberware from "./setBaselineCyberware";
import returnElectronics from "../../components/lists/returnElectronics";
import getRandomObjectByKey from "../getRandomeObjectByKey";

const electronics = returnElectronics();
const specializations = [
  "Butcher",
  "Corporate Spider",
  "NetNinjas",
  "VR Legion",
];
export default function createDecker(character) {
  character.specialization = specializations[Math.floor(Math.random() * 4)];
  if (character.specialization === "Butcher") {
    getDeckerStats(character);
    getCyberware(character);
  }
  if (
    character.specialization === "Corporate Spider" &&
    Number(character.rating) === 6
  ) {
    character.specialization = "GOD";
  }

  let cyberdeck = null;

  function getCyberdeck(character) {
    if (Number(character.rating) === 6) {
      cyberdeck = getRandomeObjectByPrice(
        electronics,
        "cyberdecks",
        0,
        1,
        "cost",
        "over",
        800000,
      );
    } else if (Number(character.rating) === 5) {
      cyberdeck = getRandomeObjectByPrice(
        electronics,
        "cyberdecks",
        0,
        1,
        "cost",
        "over",
        500000,
      );
    } else if (Number(character.rating) === 4) {
      cyberdeck = getRandomeObjectByPrice(
        electronics,
        "cyberdecks",
        0,
        1,
        "cost",
        "under",
        400000,
      );
    } else if (Number(character.rating) === 3) {
      cyberdeck = getRandomeObjectByPrice(
        electronics,
        "cyberdecks",
        0,
        1,
        "cost",
        "under",
        300000,
      );
    } else if (Number(character.rating) === 2) {
      cyberdeck = getRandomeObjectByPrice(
        electronics,
        "cyberdecks",
        0,
        1,
        "cost",
        "under",
        100000,
      );
    } else if (Number(character.rating) === 1) {
      cyberdeck = getRandomeObjectByPrice(
        electronics,
        "cyberdecks",
        0,
        1,
        "cost",
        "under",
        50000,
      );
    }
    character.cyberdeck = cyberdeck;
    character.cyberdeckModule = getRandomObjectByKey(
      electronics,
      "cyberdeckModules",
      0,
      2,
    );
  }
  getDeckerStats(character);
  getCyberdeck(character);

  setBaselineCyberware(character);
  getItems(character);
}
