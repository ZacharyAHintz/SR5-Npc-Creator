import returnVehicles from "../components/lists/returnVehicles";
import returnWeapons from "../components/lists/returnWeapon";
import returnDrones from "../components/lists/returnDrones";
import returnAmmo from "../components/lists/returnAmmo";
import getRandomObjectByKey from "../helperFunctions/getRandomeObjectByKey";

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
  const skillToFirearmWeaponMapping = {
    "Demolitions": [ammo, "grenades", 0, 3],
    "Automatics": [weapons, "heavyMachineGuns", 0, 1],
    "Longarms": [weapons, "sniperRifles", 0, 1],
    "Pistols": [weapons, "lightPistols", 0, 1],
    "Heavy Weapons": [weapons, "assaultCannons", 0, 1],
  };

  // prettier-ignore
  const skillToMeleeWeaponMapping = {
    "Blades": [weapons, "blades", 0, 1],
    "Clubs": [weapons, "clubs", 0, 1],
    "Unarmed Combat": [weapons, "exoticMeleeWeapons", 0, 1],
  };

  // prettier-ignore
  const skillToExplosiveWeaponMapping = {
    "Demolitions": [ammo, "grenades", 0, 3],
  };

  matchingSkills.forEach((skill) => {
    if (skillToGearMapping.hasOwnProperty(skill.skill)) {
      character.drones = character.drones || {};
      character.drones[skill.skill] = getRandomObjectByKey(
        skillToGearMapping[skill.skill][0],
        skillToGearMapping[skill.skill][1],
        skillToGearMapping[skill.skill][2],
        skillToGearMapping[skill.skill][3],
      );
    } else if (skillToVehicleMapping.hasOwnProperty(skill.skill)) {
      character.vehicle = character.vehicle || {};
      character.vehicle[skill.skill] = getRandomObjectByKey(
        skillToVehicleMapping[skill.skill][0],
        skillToVehicleMapping[skill.skill][1],
        skillToVehicleMapping[skill.skill][2],
        skillToVehicleMapping[skill.skill][3],
      );
    } else if (skillToFirearmWeaponMapping.hasOwnProperty(skill.skill)) {
      character.firearms = character.firearms || {};
      character.firearms[skill.skill] = getRandomObjectByKey(
        skillToFirearmWeaponMapping[skill.skill][0],
        skillToFirearmWeaponMapping[skill.skill][1],
        skillToFirearmWeaponMapping[skill.skill][2],
        skillToFirearmWeaponMapping[skill.skill][3],
      );
    } else if (skillToMeleeWeaponMapping.hasOwnProperty(skill.skill)) {
      character.meleeWeapons = character.meleeWeapons || {};
      character.meleeWeapons[skill.skill] = getRandomObjectByKey(
        skillToMeleeWeaponMapping[skill.skill][0],
        skillToMeleeWeaponMapping[skill.skill][1],
        skillToMeleeWeaponMapping[skill.skill][2],
        skillToMeleeWeaponMapping[skill.skill][3],
      );
    } else if (skillToExplosiveWeaponMapping.hasOwnProperty(skill.skill)) {
      character.explosives = character.explosives || {};
      character.explosives[skill.skill] = getRandomObjectByKey(
        skillToExplosiveWeaponMapping[skill.skill][0],
        skillToExplosiveWeaponMapping[skill.skill][1],
        skillToExplosiveWeaponMapping[skill.skill][2],
        skillToExplosiveWeaponMapping[skill.skill][3],
      );
    }
  });
}
