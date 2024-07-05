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

import returnSecurity from "../../components/lists/returnSecurity";

const armor = returnArmor();
const ammo = returnAmmo();
const weapons = returnWeapons();
const vehicles = returnVehicles();
const misc = returnMisc();
const electronics = returnElectronics();
const security = returnSecurity();

export default function getItems(character) {
  let priceWeight;
  let overUnder;

  if (Number(Number(character.rating)) === 6) {
    priceWeight = 9999;
    overUnder = "over";
  } else if (Number(Number(character.rating)) === 5) {
    priceWeight = 10000;
    overUnder = "under";
  } else if (Number(Number(character.rating)) === 4) {
    priceWeight = 5000;
    overUnder = "under";
  } else if (Number(Number(character.rating)) === 3) {
    priceWeight = 2000;
    overUnder = "under";
  } else if (Number(Number(character.rating)) === 2) {
    priceWeight = 1600;
    overUnder = "under";
  } else if (Number(Number(character.rating)) === 1) {
    priceWeight = 1111;
    overUnder = "under";
  }

  if (!character.vehicles) {
    character.vehicles = {};
  }

  if (!character.meleeWeapons) {
    character.meleeWeapons = {};
  }

  if (!character.explosives) {
    character.explosives = {};
  }
  if (!character.firearms) {
    character.firearms = {};
  }

  if (character.archetype === "Shaman") {
    character.security = getRandomObjectsFromDepth(
      security,
      2,
      Number(character.rating),
    );

    character.comlinks = getRandomeObjectByPrice(
      electronics,
      "comlinks",
      0,
      1,
      "rating",
      "over",
      Number(character.rating),
    );

    character.armor = getRandomeObjectByPrice(
      armor,
      "clothingAndArmor",
      0,
      1,
      "cost",
      overUnder,
      priceWeight,
    );
    character.misc = getRandomObjectByKey(misc, "chemicals", 0, 2);

    const extraVehicles = getRandomObjectsFromDepth(vehicles, 2, 1);

    extraVehicles.forEach((obj) => {
      if (Object.keys(character.vehicles).includes(obj)) {
        return;
      } else {
        character.vehicles[obj.vehicle] = obj;
      }
    });
  } else if (character.archetype === "Street Samurai") {
    character.security = getRandomObjectsFromDepth(
      security,
      2,
      Number(character.rating),
    );

    character.comlinks = getRandomeObjectByPrice(
      electronics,
      "comlinks",
      0,
      1,
      "rating",
      "over",
      Number(character.rating),
    );

    character.armor = getRandomeObjectByPrice(
      armor,
      "clothingAndArmor",
      0,
      1,
      "cost",
      overUnder,
      priceWeight,
    );

    if (Number(Number(character.rating)) < 6) {
      character.misc = getRandomObjectByKey(misc, "explosives", 0, 2);
    } else {
      character.misc = getRandomObjectByKey(misc, "nanoGear", 0, 2);
    }

    const extraVehicles = getRandomObjectsFromDepth(vehicles, 2, 1);

    extraVehicles.forEach((obj) => {
      if (Object.keys(character.vehicles).includes(obj)) {
        return;
      } else {
        character.vehicles[obj.vehicle] = obj;
      }
    });
  } else if (character.archetype === "Decker") {
    character.security = getRandomObjectsFromDepth(
      security,
      2,
      Number(character.rating),
    );

    character.comlinks = getRandomeObjectByPrice(
      electronics,
      "comlinks",
      0,
      1,
      "rating",
      "over",
      Number(character.rating),
    );

    character.armor = getRandomeObjectByPrice(
      armor,
      "clothingAndArmor",
      0,
      1,
      "cost",
      overUnder,
      priceWeight,
    );

    character.misc = getRandomObjectByKey(misc, "survivalGear", 0, 2);

    const extraVehicles = getRandomObjectsFromDepth(vehicles, 2, 1);

    extraVehicles.forEach((obj) => {
      if (Object.keys(character.vehicles).includes(obj)) {
        return;
      } else {
        character.vehicles[obj.vehicle] = obj;
      }
    });
  } else if (character.archetype === "Technomancer") {
    character.security = getRandomObjectsFromDepth(
      security,
      2,
      Number(character.rating),
    );

    character.comlinks = getRandomeObjectByPrice(
      electronics,
      "comlinks",
      0,
      1,
      "rating",
      "over",
      Number(character.rating),
    );

    character.armor = getRandomeObjectByPrice(
      armor,
      "clothingAndArmor",
      0,
      1,
      "cost",
      overUnder,
      priceWeight,
    );

    character.misc = getRandomObjectByKey(misc, "explosives", 0, 2);

    const extraVehicles = getRandomObjectsFromDepth(vehicles, 2, 2);

    extraVehicles.forEach((obj) => {
      if (Object.keys(character.vehicles).includes(obj)) {
        return;
      } else {
        character.vehicles[obj.vehicle] = obj;
      }
    });
  } else if (character.archetype === "Face") {
    character.security = getRandomObjectsFromDepth(
      security,
      2,
      Number(character.rating) + 2,
    );

    character.comlinks = getRandomeObjectByPrice(
      electronics,
      "comlinks",
      0,
      1,
      "rating",
      "over",
      Number(character.rating),
    );

    character.armor = getRandomeObjectByPrice(
      armor,
      "clothingAndArmor",
      0,
      1,
      "cost",
      overUnder,
      priceWeight,
    );

    character.misc = getRandomObjectByKey(misc, "chemicals", 0, 2);

    const extraVehicles = getRandomObjectsFromDepth(vehicles, 2, 1);

    extraVehicles.forEach((obj) => {
      if (Object.keys(character.vehicles).includes(obj)) {
        return;
      } else {
        character.vehicles[obj.vehicle] = obj;
      }
    });
  } else if (character.archetype === "Rigger") {
    character.security = getRandomObjectsFromDepth(
      security,
      2,
      Number(character.rating),
    );

    character.comlinks = getRandomeObjectByPrice(
      electronics,
      "comlinks",
      0,
      1,
      "rating",
      "over",
      Number(character.rating),
    );

    character.rcc = getRandomeObjectByPrice(
      electronics,
      "rcc",
      0,
      1,
      "deviceRating",
      "over",
      Number(character.rating) - 1,
    );

    character.armor = getRandomeObjectByPrice(
      armor,
      "clothingAndArmor",
      0,
      1,
      "cost",
      overUnder,
      priceWeight,
    );

    character.misc = getRandomObjectByKey(misc, "explosives", 0, 2);

    const extraVehicles = getRandomObjectsFromDepth(vehicles, 2, 3);

    extraVehicles.forEach((obj) => {
      if (Object.keys(character.vehicles).includes(obj)) {
        return;
      } else {
        character.vehicles[obj.vehicle] = obj;
      }
    });
  } else if (character.archetype === "Physical Adept") {
    character.security = getRandomObjectsFromDepth(
      security,
      2,
      Number(character.rating),
    );

    character.comlinks = getRandomeObjectByPrice(
      electronics,
      "comlinks",
      0,
      1,
      "rating",
      "over",
      Number(character.rating),
    );

    character.armor = getRandomeObjectByPrice(
      armor,
      "clothingAndArmor",
      0,
      1,
      "cost",
      overUnder,
      priceWeight,
    );

    character.misc = getRandomObjectByKey(misc, "survivalGear", 0, 2);
  } else if (character.archetype === "Corpo") {
    character.security = getRandomObjectsFromDepth(
      security,
      2,
      Number(character.rating) + 2,
    );
    character.comlinks = getRandomeObjectByPrice(
      electronics,
      "comlinks",
      0,
      1,
      "rating",
      "over",
      Number(character.rating),
    );

    character.armor = getRandomeObjectByPrice(
      armor,
      "clothingAndArmor",
      0,
      1,
      "cost",
      overUnder,
      priceWeight,
    );

    character.misc = getRandomObjectByKey(misc, "nanoGear", 0, 2);

    const extraVehicles = getRandomObjectsFromDepth(vehicles, 2, 2);

    extraVehicles.forEach((obj) => {
      if (Object.keys(character.vehicles).includes(obj)) {
        return;
      } else {
        character.vehicles[obj.vehicle] = obj;
      }
    });
  }
}
