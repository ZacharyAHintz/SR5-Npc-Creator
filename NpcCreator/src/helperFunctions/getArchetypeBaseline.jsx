// Import necessary functions and lists
import getRandomObjectsFromDepth from "./getRandomObjectFromDepth";
import returnAmmo from "../components/lists/returnAmmo";
import returnDrones from "../components/lists/returnDrones";
import returnMagicalEquipment from "../components/lists/returnMagicalEquipment";
import returnVehicles from "../components/lists/returnVehicles";
import returnWeapons from "../components/lists/returnWeapon";
import returnElectrinics from "../components/lists/returnElectrinics";
import returnMentorSpirits from "../components/lists/returnMentorSpirits";
import returnAdeptPowers from "../components/lists/returnAdeptPowers";
import returnCyberware from "../components/lists/returnCyberware";
import returnArmor from "../components/lists/returnArmor";
import returnMisc from "../components/lists/returnMisc";
import returnSecurity from "../components/lists/returnSecurity";
import returnTraditions from "../components/lists/returnTraditions";
import returnVehicleMods from "../components/lists/returnVehicleMods";
function getArchetypeBaseline(archetype, rank) {
  // Define the baseline lists for each archetype
  // prettier-ignore
  const archetypeBaselines = {
    "Shaman": {
      spells: shamanSpells,
      spirits: shamanSpirits,
    },
    "Street Samurai": {
      cyberware: streetSamuraiCyberware,
    },
    "Decker": {
      equipment: deckerEquipment,
    },
    "Technomancer": {
      equipment: technomancerEquipment,
    },
    "Face": {
      equipment: faceEquipment,
    },
    "Rigger": {
      drones: riggerDrones,
    },
    "Physical Adept": {
      powers: physicalAdeptPowers,
    },
    "Corpo": {
      equipment: corpoEquipment,
    },
  };

  // Determine the amount of items based on the rank
  const amounts = {
    spells: rank + 2,
    spirits: rank + 1,
    equipment: rank * 2,
    cyberware: rank,
    drones: rank + 1,
    powers: rank + 3,
  };

  // Retrieve the baseline lists for the specified archetype
  const baseline = archetypeBaselines[archetype];
  if (!baseline) {
    throw new Error(`Invalid archetype: ${archetype}`);
  }

  // Roll on the lists using getRandomObjectFromDepth
  const results = {};
  for (const [key, list] of Object.entries(baseline)) {
    const amount = amounts[key];
    results[key] = getRandomObjectFromDepth(list, 2, amount);
  }

  return results;
}

export default getArchetypeBaseline;
