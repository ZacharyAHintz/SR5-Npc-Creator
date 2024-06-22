import returnVehicles from "../components/lists/returnVehicles";
import returnWeapons from "../components/lists/returnWeapon";
import returnDrones from "../components/lists/returnDrones";
import returnAmmo from "../components/lists/returnAmmo";
export default function determineGearRequirements(character) {
  const vehicles = returnVehicles();
  const weapons = returnWeapons();
  const drones = returnDrones();
  const ammo = returnAmmo();
  if (typeof character.skills !== "object" || character.skills === null) {
    throw new Error("Character skills is not an object or is null.");
  }
  const requiredSkills = [
    "Gunnery",
    "Pilot Aircraft",
    "Pilot Ground Craft",
    "Pilot Watercraft",
    "Navigation",
    "Electronic Warfare",
    "Heavy Weapons",
    "Automatics",
    "Blades",
    "Clubs",
    "Unarmed Combat",
    "Longarms",
    "Pistols",
  ];
  const matchingSkills = [];

  // Iterate over the keys of the skills object
  for (const key in character.skills) {
    if (character.skills.hasOwnProperty(key)) {
      const skillObj = character.skills[key];

      if (requiredSkills.includes(skillObj.skill)) {
        matchingSkills.push({ ...skillObj });
      }
    }
  }

  // prettier-ignore
  const skillToGearMapping = {
    
    "Gunnery": [drones, "largeDrones", 0, 1],
  };
  // prettier-ignore
  const skillToVehicleMapping = {
    "Pilot Ground Craft": [vehicles, "cars", 0, 1],
    "Pilot Watercraft": [vehicles, "watercraft", 0, 1],
    "Pilot Aircraft": [vehicles, "aircraft", 0, 1],
  };
  // prettier-ignore
  const skillToWeaponMapping = {
    "Demolitions": [ammo, "grenades", 0, 3],
    "Automatics": [weapons, "heavyMachineGuns", 0, 1],
    "Blades": [weapons, "blades", 0, 1],
    "Clubs": [weapons, "clubs", 0, 1],
    "Unarmed Combat": [weapons, "exoticMeleeWeapons", 0, 1],
    "Longarms": [weapons, "sniperRifles", 0, 1],
    "Pistols": [weapons, "lightPistols", 0, 1],
    "Heavy Weapons": [weapons, "assaultCannons", 0, 1],
  };

  let gearRequirementsList = {
    gear: [],
    vehicle: [],
    weapon: [],
  };
  for (const normalizedSkillName of matchingSkills) {
    const gear = skillToGearMapping[normalizedSkillName.skill];
    const vehicle = skillToVehicleMapping[normalizedSkillName.skill];
    const weapon = skillToWeaponMapping[normalizedSkillName.skill];

    if (gear) {
      gearRequirementsList.gear.push(gear);
    }
    if (vehicle) {
      gearRequirementsList.vehicle.push(vehicle);
    }
    if (weapon) {
      gearRequirementsList.weapon.push(weapon);
    }
  }

  return gearRequirementsList;
}
