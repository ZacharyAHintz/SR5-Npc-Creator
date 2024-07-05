import returnAdeptPowers from "../../components/lists/returnAdeptPowers";
import getRandomObjectsFromDepth from "../getRandomObjectFromDepth";
import getRandomeObjectByPrice from "../getRandomeObjectByPrice";

let powers = returnAdeptPowers();
function extractNumberFromString(str) {
  const num = str.match(/-?\d+(\.\d+)?/);
  return num ? num[0] : null;
}

export default function getAdeptPowers(character) {
  let powerPoints = character.stats.essence;
  let powersArray = [];

  while (powerPoints > 0) {
    let adeptPower = getRandomObjectsFromDepth(powers, 1, 1);

    powersArray.push(adeptPower);

    powerPoints -= extractNumberFromString(adeptPower[0].cost);
  }
  character.adeptPowers = powersArray;
}
