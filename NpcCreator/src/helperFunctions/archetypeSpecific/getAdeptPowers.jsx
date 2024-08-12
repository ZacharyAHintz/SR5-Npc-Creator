import returnAdeptPowers from "../../components/lists/returnAdeptPowers";
import getRandomObjectsFromDepth from "../getRandomObjectFromDepth";
import getRandomeObjectByPrice from "../getRandomeObjectByPrice";

let powers = returnAdeptPowers();
function extractNumberFromString(str) {
  try {
    const num = str.match(/-?\d+(\.\d+)?/);
    return num ? parseFloat(num[0]) : 1; // Default to 1 if no number is found
  } catch (error) {
    console.error("Error extracting number from string:", error);
    return 1; // Default to 1 in case of error
  }
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
