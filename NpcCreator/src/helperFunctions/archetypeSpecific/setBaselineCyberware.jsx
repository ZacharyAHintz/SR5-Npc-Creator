import returnCyberware from "../../components/lists/returnCyberware";

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

function getRandomElements(array, count) {
  const shuffled = array.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function updateCharacterEssence(character, selectedCyberware) {
  selectedCyberware.forEach((item) => {
    if (item.essence) {
      character.essence -= item.essence;
      character.cyberLevel -= item.essence;
    }
  });
}

export default function setBaselineCyberware(character) {
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
  const cyberzombieArray = [
    updatedCyberware.bodyDevices.bondLacingTitanium,
    updatedCyberware.bodyDevices.wiredReflexesR3,
    updatedCyberware.nanoCybernetic.suprathyroidGland,
    updatedCyberware.nanoCybernetic.muscleToner,
  ];
  const cyberFaceArray = [
    updatedCyberware.culturedBioware.cerebralBooster,
    updatedCyberware.nanoCybernetic.voiceMimic,
    updatedCyberware.nanoCybernetic.nanohiveHard,
    updatedCyberware.nanoCybernetic.smartskin,
    updatedCyberware.eyeDevices.imageLink,
  ];
  const burntAdeptArray = [
    updatedCyberware.culturedBioware.boostedReflexes,
    updatedCyberware.bodyDevices.moveByWireR3,
    updatedCyberware.bodyDevices.bondLacingTitanium,
  ];
  const cyberspikeAssasinArray = [
    updatedCyberware.culturedBioware.painEditor,
    updatedCyberware.culturedBioware.cerebralBooster,
  ];
  const gunBunnyArray = [
    updatedCyberware.culturedBioware.synapticBooster,
    updatedCyberware.bodyDevices.reactionEnhancersR13,
    updatedCyberware.basicBioware.suprathyroidGland,
    updatedCyberware.basicBioware.muscleToner,
  ];

  const riggerArray = [
    updatedCyberware.basicBioware.muscleToner,
    updatedCyberware.bodyDevices.reactionEnhancersR13,
  ];
  const hTRArray = [
    updatedCyberware.culturedBioware.synapticBooster,
    updatedCyberware.bodyDevices.reactionEnhancersR13,
    updatedCyberware.basicBioware.suprathyroidGland,
    updatedCyberware.basicBioware.muscleToner,
    updatedCyberware.bodyDevices.bondLacingTitanium,
  ];

  let selectedCyberware = [];
  if (character.archetype === "Rigger") {
    selectedCyberware = getRandomElements(riggerArray, 2);
  } else if (character.specialization === "HTR") {
    selectedCyberware = getRandomElements(hTRArray, 2);
  } else if (
    character.specialization === "GunBunny" ||
    character.specialization === "Razor Boy"
  ) {
    selectedCyberware = getRandomElements(gunBunnyArray, 2);
  } else if (character.specialization === "CyberSpikeAssasin") {
    selectedCyberware = getRandomElements(cyberspikeAssasinArray, 2);
  } else if (character.specialization === "BurntAdept") {
    selectedCyberware = getRandomElements(burntAdeptArray, 2);
  } else if (character.specialization === "CyberFace") {
    selectedCyberware = getRandomElements(cyberFaceArray, 2);
  } else if (character.specialization === "CyberZombie") {
    selectedCyberware = getRandomElements(cyberzombieArray, 2);
  }

  character.cyberware = selectedCyberware;
  updateCharacterEssence(character, selectedCyberware);
}
