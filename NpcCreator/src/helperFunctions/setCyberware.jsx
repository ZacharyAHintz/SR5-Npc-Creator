import returnCyberware from "../components/lists/returnCyberware";
import getRandomeObjectByPrice from "./getRandomeObjectByPrice";

const cyberware = returnCyberware();
const wareGrades = {
  standard: {
    grade: "Standard",
    essCostMultiplier: 1.0,
    availMod: "-",
    costMultiplier: 1,
  },
  alphaware: {
    grade: "Alphaware",
    essCostMultiplier: 0.8,
    availMod: "+2",
    costMultiplier: 1.2,
  },
  betaware: {
    grade: "Betaware",
    essCostMultiplier: 0.7,
    availMod: "+4",
    costMultiplier: 1.5,
  },
  deltaware: {
    grade: "Deltaware",
    essCostMultiplier: 0.5,
    availMod: "+8",
    costMultiplier: 2.5,
  },
  used: {
    grade: "Used",
    essCostMultiplier: 1.25,
    availMod: "-4",
    costMultiplier: 0.75,
  },
};

export default function setCyberware(character) {
  let availablePoints = character.cyberLevel;

  let factor = 1.0;
  if (character.wareGrade && wareGrades[character.wareGrade]) {
    factor = wareGrades[character.wareGrade].essCostMultiplier;
  }
  function updateEssenceValues(obj, factor) {
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (key === "essence") {
          obj[key] = obj[key] * factor;
        } else {
          obj[key] = updateEssenceValues(obj[key], factor);
        }
      }
    }

    return obj;
  }

  const updatedCyberware = updateEssenceValues(cyberware, factor);

  let cyberwareIndex = [
    "headDevices",
    "eyeDevices",
    "earDevices",
    "bodyDevices",
    "weapons",
    "nanoCybernetic",
    "basicBioware",
    "culturedBioware",
  ];

  let deviceArray = character.cyberware;

  while (availablePoints > 0.3 && cyberwareIndex.length > 0) {
    let randomIndex = Math.floor(Math.random() * cyberwareIndex.length);
    let item = cyberwareIndex[randomIndex];

    let currentDevice = getRandomeObjectByPrice(
      updatedCyberware,
      item,
      0,
      1,
      "essence",
      "under",
      availablePoints,
    );

    if (
      cyberwareIndex === "headDevices" ||
      cyberwareIndex === "eyeDevices" ||
      cyberwareIndex === "earDevices" ||
      cyberwareIndex === "limbDevices"
    ) {
      cyberwareIndex.splice(randomIndex, 1);
    }

    deviceArray.push(currentDevice);

    availablePoints -=
      currentDevice[Object.getOwnPropertyNames(currentDevice)].essence;
  }
  console.log("deviceArray: ", deviceArray);
  console.log("character ", character);
  console.log("character.stats.essence: ", character.stats.essence);
  console.log("availablePoints: ", availablePoints);
  console.log("character.cyberLevel", character.cyberLevel);
  character.cyberware = deviceArray;
  character.stats.essence =
    character.stats.essence - character.cyberLevel + availablePoints;
}
