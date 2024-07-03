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

function getRandomElements(obj, count) {
  const entries = Object.entries(obj);
  const shuffled = entries.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).map(([key, value]) => ({ [key]: value }));
}

function updateCharacterEssence(character, selectedCyberware) {
  selectedCyberware.forEach((item) => {
    const essence = Object.values(item)[0].essence;
    if (essence) {
      character.stats.essence -= essence;
      character.cyberLevel -= essence;
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
  const cyberzombieArray = {
    bondLacingTitanium: updatedCyberware.bodyDevices.bondLacingTitanium,
    wiredReflexesR3: updatedCyberware.bodyDevices.wiredReflexesR3,
    suprathyroidGland: updatedCyberware.nanoCybernetic.suprathyroidGland,
    muscleToner: updatedCyberware.nanoCybernetic.muscleToner,
  };
  const cyberFaceArray = {
    cerebralBooster: updatedCyberware.culturedBioware.cerebralBooster,
    voiceMimic: updatedCyberware.nanoCybernetic.voiceMimic,
    nanohiveHard: updatedCyberware.nanoCybernetic.nanohiveHard,
    smartskin: updatedCyberware.nanoCybernetic.smartskin,
    imageLink: updatedCyberware.eyeDevices.imageLink,
  };
  const burntAdeptArray = {
    boostedReflexes: updatedCyberware.culturedBioware.boostedReflexes,
    moveByWireR3: updatedCyberware.bodyDevices.moveByWireR3,
    bondLacingTitanium: updatedCyberware.bodyDevices.bondLacingTitanium,
  };
  const cyberspikeAssasinArray = {
    painEditor: updatedCyberware.culturedBioware.painEditor,
    cerebralBooster: updatedCyberware.culturedBioware.cerebralBooster,
  };
  const gunBunnyArray = {
    synapticBooster: updatedCyberware.culturedBioware.synapticBooster,
    reactionEnhancersR13: updatedCyberware.bodyDevices.reactionEnhancersR13,
    suprathyroidGland: updatedCyberware.basicBioware.suprathyroidGland,
    muscleToner: updatedCyberware.basicBioware.muscleToner,
  };

  const riggerArray = {
    muscleToner: updatedCyberware.basicBioware.muscleToner,
    reactionEnhancersR13: updatedCyberware.bodyDevices.reactionEnhancersR13,
  };
  const hTRArray = {
    synapticBooster: updatedCyberware.culturedBioware.synapticBooster,
    reactionEnhancersR13: updatedCyberware.bodyDevices.reactionEnhancersR13,
    suprathyroidGland: updatedCyberware.basicBioware.suprathyroidGland,
    muscleToner: updatedCyberware.basicBioware.muscleToner,
    bondLacingTitanium: updatedCyberware.bodyDevices.bondLacingTitanium,
  };

  let selectedCyberware = [];
  if (character.archetype === "Rigger") {
    selectedCyberware = getRandomElements(riggerArray, 2);
    if (Number(character.rating) <= 3) {
      character.icr = updatedCyberware.riggers.controlRigR1;
      character.stats.essence -= updatedCyberware.riggers.controlRigR1.essence;
      character.cyberLevel -= updatedCyberware.riggers.controlRigR1.essence;
    } else if (
      Number(character.rating) === 4 ||
      Number(character.rating) === 5
    ) {
      character.icr = updatedCyberware.riggers.controlRigR2;
      character.stats.essence -= updatedCyberware.riggers.controlRigR2.essence;
      character.cyberLevel -= updatedCyberware.riggers.controlRigR2.essence;
    } else {
      character.icr = updatedCyberware.riggers.controlRigR3;
      character.stats.essence -= updatedCyberware.riggers.controlRigR3.essence;
      character.cyberLevel -= updatedCyberware.riggers.controlRigR3.essence;
    }
  } else if (character.specialization === "HTR") {
    selectedCyberware = getRandomElements(hTRArray, 2);
  } else if (
    character.specialization === "Gun Bunny" ||
    character.specialization === "Razor Boy"
  ) {
    selectedCyberware = getRandomElements(gunBunnyArray, 2);
  } else if (character.specialization === "CyberSpikeAssasin") {
    selectedCyberware = getRandomElements(cyberspikeAssasinArray, 2);
  } else if (character.specialization === "BurntAdept") {
    selectedCyberware = getRandomElements(burntAdeptArray, 2);
  } else if (character.specialization === "CyberFace") {
    selectedCyberware = getRandomElements(cyberFaceArray, 2);
  } else if (character.specialization === "Cyberzombie") {
    selectedCyberware = getRandomElements(cyberzombieArray, 2);
  }

  character.cyberware = selectedCyberware;

  updateCharacterEssence(character, selectedCyberware);
  console.log("setBaselineCyberware", character);
}
