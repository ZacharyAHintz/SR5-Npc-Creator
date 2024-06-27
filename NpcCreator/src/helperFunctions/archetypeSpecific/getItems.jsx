import returnArmor from "../../components/lists/returnArmor";
import returnAmmo from "../../components/lists/returnAmmo";
import returnWeapons from "../../components/lists/returnWeapon";
import returnVehicles from "../../components/lists/returnVehicles";
import returnMisc from "../../components/lists/returnMisc";
import returnElectronics from "../../components/lists/returnElectronics";
import returnCyberware from "../../components/lists/returnCyberware";
import getRandomObjectsFromDepth from "../getRandomObjectFromDepth";
import getRandomObjectByKey from "../getRandomeObjectByKey";
import getRandomeObjectByPrice from "../getRandomeObjectByPrice";

const armor = returnArmor();
const ammo = returnAmmo();
const weapons = returnWeapons();
const vehicles = returnVehicles();
const misc = returnMisc();
const electronics = returnElectronics();
const cyberware = returnCyberware();
// vehicles are attempting to pass an object into another object but it is an array of objects.fix that

export default function getItems(character) {
  let priceWeight;
  let overUnder;

  if (character.rating === 6) {
    priceWeight = 9999;
    overUnder = "over";
  } else if (character.rating === 5) {
    priceWeight = 10000;
    overUnder = "under";
  } else if (character.rating === 4) {
    priceWeight = 5000;
    overUnder = "under";
  } else if (character.rating === 3) {
    priceWeight = 2000;
    overUnder = "under";
  } else if (character.rating === 2) {
    priceWeight = 1600;
    overUnder = "under";
  } else if (character.rating === 1) {
    priceWeight = 1111;
    overUnder = "under";
  }
  console.log(priceWeight, overUnder);
  console.log(character.rating);

  if (character.archetype === "Shaman") {
    character.armor = getRandomeObjectByPrice(
      armor,
      "clothingAndArmor",
      0,
      1,
      "cost",
      overUnder,
      priceWeight,
    );

    const extraVehicles = getRandomObjectsFromDepth(vehicles, 1, 1);
    extraVehicles.forEach((obj) => {
      if (Object.keys(character.gear.vehicles).includes(obj)) {
        return;
      } else {
        character.gear.vehicles.push(obj);
      }
    });
  } else if (character.archetype === "Street Samurai") {
    character.armor = getRandomeObjectByPrice(
      armor,
      "clothingAndArmor",
      0,
      1,
      "cost",
      overUnder,
      priceWeight,
    );

    const extraVehicles = getRandomObjectsFromDepth(vehicles, 1, 1);
    extraVehicles.forEach((obj) => {
      if (Object.keys(character.gear.vehicles).includes(obj)) {
        return;
      } else {
        character.gear.vehicles.push(obj);
      }
    });
  } else if (character.archetype === "Decker") {
    character.armor = getRandomeObjectByPrice(
      armor,
      "clothingAndArmor",
      0,
      1,
      "cost",
      overUnder,
      priceWeight,
    );

    const extraVehicles = getRandomObjectsFromDepth(vehicles, 1, 1);
    extraVehicles.forEach((obj) => {
      if (Object.keys(character.gear.vehicles).includes(obj)) {
        return;
      } else {
        character.gear.vehicles.push(obj);
      }
    });
  } else if (character.archetype === "Technomancer") {
    character.armor = getRandomeObjectByPrice(
      armor,
      "clothingAndArmor",
      0,
      1,
      "cost",
      overUnder,
      priceWeight,
    );
    const extraVehicles = getRandomObjectsFromDepth(vehicles, 1, 2);
    extraVehicles.forEach((obj) => {
      if (Object.keys(character.gear.vehicles).includes(obj)) {
        return;
      } else {
        character.gear.vehicles.push(obj);
      }
    });
  } else if (character.archetype === "Face") {
    character.armor = getRandomeObjectByPrice(
      armor,
      "clothingAndArmor",
      0,
      1,
      "cost",
      overUnder,
      priceWeight,
    );
    const extraVehicles = getRandomObjectsFromDepth(vehicles, 1, 1);
    extraVehicles.forEach((obj) => {
      if (Object.keys(character.gear.vehicles).includes(obj)) {
        return;
      } else {
        character.gear.vehicles.push(obj);
      }
    });
  } else if (character.archetype === "Rigger") {
    character.armor = getRandomeObjectByPrice(
      armor,
      "clothingAndArmor",
      0,
      1,
      "cost",
      overUnder,
      priceWeight,
    );
    const extraVehicles = getRandomObjectsFromDepth(vehicles, 1, 3);
    extraVehicles.forEach((obj) => {
      if (Object.keys(character.gear.vehicles).includes(obj)) {
        return;
      } else {
        character.gear.vehicles.push(obj);
      }
    });
  } else if (character.archetype === "Physical Adept") {
    character.armor = getRandomeObjectByPrice(
      armor,
      "clothingAndArmor",
      0,
      1,
      "cost",
      overUnder,
      priceWeight,
    );
  } else if (character.archetype === "Corpo") {
    character.armor = getRandomeObjectByPrice(
      armor,
      "clothingAndArmor",
      0,
      1,
      "cost",
      overUnder,
      priceWeight,
    );
    const extraVehicles = getRandomObjectsFromDepth(vehicles, 1, 2);
    extraVehicles.forEach((obj) => {
      if (Object.keys(character.gear.vehicles).includes(obj)) {
        return;
      } else {
        character.gear.vehicles.push(obj);
      }
    });
  }
}
