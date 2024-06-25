import getRandomObjectByKey from "../../helperFunctions/getRandomeObjectByKey";
import returnSpells from "../../components/lists/returnSpells";

const spells = returnSpells();

export default function getSpells(character) {
  const specialization = character.specialization;

  if (specialization === "Summoner") {
    character.spells = getRandomObjectByKey(
      spells,
      "manipulationSpells",
      0,
      character.rating,
    );
  } else if (specialization === "Anti-Magic") {
    character.spells = getRandomObjectByKey(
      spells,
      "detectionSpells",
      0,
      character.rating,
    );
  } else if (specialization === "Astral Combatant") {
    character.spells = getRandomObjectByKey(
      spells,
      "combatSpells",
      0,
      character.rating,
    );
  } else if (specialization === "Ritualist") {
    character.spells = getRandomObjectByKey(
      "Rituals",
      "key",
      0,
      character.rating,
    );
  } else if (specialization === "Spellcaster") {
    character.spells = getRandomObjectByKey(
      spells,
      "combatSpells",
      0,
      character.rating,
    );
  } else if (specialization === "Alchemist") {
    character.spells = getRandomObjectByKey(
      spells,
      "combatSpells",
      0,
      character.rating,
    );
  } else if (specialization === "Manipulator") {
    character.spells = getRandomObjectByKey(
      spells,
      "manipulationSpells",
      0,
      character.rating,
    );
  } else if (specialization === "Healer") {
    character.spells = getRandomObjectByKey(
      spells,
      "healthSpells",
      0,
      character.rating,
    );
  } else if (specialization === "Blood Mage") {
    character.spells = getRandomObjectByKey(
      spells,
      "bloodSpells",
      0,
      character.rating,
    );
  } else if (specialization === "Witch Doctor") {
    character.spells = getRandomObjectByKey(
      spells,
      "manipulationSpells",
      0,
      character.rating,
    );
  } else if (specialization === "Insect Shaman") {
    character.spells = getRandomObjectByKey(
      spells,
      "manipulationSpells",
      0,
      character.rating,
    );
  } else {
    return error("specialization not found");
  }
}
