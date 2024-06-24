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
  // Define the baseline lists for each archetype with depths
  // prettier-ignore
  const archetypeBaselines = {
    "Shaman": {
      spells: { list: shamanSpells, depth: 2 },
      spirits: { list: shamanSpirits, depth: 2 },
    },
    "Street Samurai": {
      cyberware: { list: streetSamuraiCyberware, depth: 2 },
    },
    "Decker": {
      equipment: { list: deckerEquipment, depth: 2 },
    },
    "Technomancer": {
      equipment: { list: technomancerEquipment, depth: 2 },
    },
    "Face": {
      equipment: { list: faceEquipment, depth: 2 },
    },
    "Rigger": {
      drones: { list: riggerDrones, depth: 2 },
    },
    "Physical Adept": {
      powers: { list: physicalAdeptPowers, depth: 2 },
    },
    "Corpo": {
      equipment: { list: corpoEquipment, depth: 2 },
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
  for (const [key, { list, depth }] of Object.entries(baseline)) {
    const amount = amounts[key];
    results[key] = getRandomObjectFromDepth(list, depth, amount);
  }

  return results;
}

export default getArchetypeBaseline;
