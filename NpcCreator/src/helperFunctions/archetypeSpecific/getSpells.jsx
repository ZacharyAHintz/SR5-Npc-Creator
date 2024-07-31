import getRandomObjectByKey from "../../helperFunctions/getRandomeObjectByKey";
import returnSpells from "../../components/lists/returnSpells";
import returnRituals from "../../components/lists/returnRituals";
import getRandomObjectsFromDepth from "../getRandomObjectFromDepth";
import findObjectWithGivenValue from "../../helperFunctions/findObjectWithGivenValue";

import returnSkills from "../../components/lists/returnSkills";

const skills = returnSkills();
const spells = returnSpells();
const rituals = returnRituals();

export default function getSpells(character) {
  const specialization = character.specialization;

  //... look it works okay.
  if (specialization === "Summoner") {
    character.spells = getRandomObjectByKey(
      spells,
      "manipulationSpells",
      0,
      Number(character.rating),
    );
    const requiredSkills = ["Summoning", "Binding"];

    requiredSkills.forEach((skill) => {
      if (!character.skills.hasOwnProperty(skill)) {
        const skillDetails = findObjectWithGivenValue(skills, skill);
        character.skills[skill] = {
          skill: skillDetails[0],
          attribute: skillDetails[1],
          limit: skillDetails[2],
          rank: Number(character.rating) + 4,
        };
      } else {
        character.skills[skill].rank += 2;
      }
    });
  } else if (specialization === "Anti-Magic") {
    character.spells = getRandomObjectByKey(
      spells,
      "detectionSpells",
      0,
      Number(character.rating),
    );
    const requiredSkills = ["Counterspelling", "Spellcasting"];

    requiredSkills.forEach((skill) => {
      if (!character.skills.hasOwnProperty(skill)) {
        const skillDetails = findObjectWithGivenValue(skills, skill);
        character.skills[skill] = {
          skill: skillDetails[0],
          attribute: skillDetails[1],
          limit: skillDetails[2],
          rank: Number(character.rating) + 4,
        };
      } else {
        character.skills[skill].rank += 2;
      }
    });
  } else if (specialization === "Astral Combatant") {
    character.spells = getRandomObjectByKey(
      spells,
      "combatSpells",
      0,
      Number(character.rating),
    );
    const requiredSkills = ["Astral Combat", "Counterspelling"];

    requiredSkills.forEach((skill) => {
      if (!character.skills.hasOwnProperty(skill)) {
        const skillDetails = findObjectWithGivenValue(skills, skill);
        character.skills[skill] = {
          skill: skillDetails[0],
          attribute: skillDetails[1],
          limit: skillDetails[2],
          rank: Number(character.rating) + 4,
        };
      } else {
        character.skills[skill].rank += 2;
      }
    });
  } else if (specialization === "Ritualist") {
    character.spells = getRandomObjectByKey(
      spells,
      "detectionSpells",
      0,
      Number(character.rating),
    );
    const requiredSkills = ["Counterspelling", "Ritual Spellcasting"];

    requiredSkills.forEach((skill) => {
      if (!character.skills.hasOwnProperty(skill)) {
        const skillDetails = findObjectWithGivenValue(skills, skill);
        character.skills[skill] = {
          skill: skillDetails[0],
          attribute: skillDetails[1],
          limit: skillDetails[2],
          rank: Number(character.rating) + 4,
        };
      } else {
        character.skills[skill].rank += 2;
      }
    });
    character.rituals = getRandomObjectsFromDepth(
      rituals,
      1,
      Number(character.rating) + 2,
    );
  } else if (specialization === "Spellcaster") {
    character.spells = getRandomObjectByKey(
      spells,
      "combatSpells",
      0,
      Number(character.rating),
    );
    const requiredSkills = ["Spellcasting", "Counterspelling"];

    requiredSkills.forEach((skill) => {
      if (!character.skills.hasOwnProperty(skill)) {
        const skillDetails = findObjectWithGivenValue(skills, skill);
        character.skills[skill] = {
          skill: skillDetails[0],
          attribute: skillDetails[1],
          limit: skillDetails[2],
          rank: Number(character.rating) + 4,
        };
      } else {
        character.skills[skill].rank += 2;
      }
    });
  } else if (specialization === "Alchemist") {
    character.spells = getRandomObjectByKey(
      spells,
      "combatSpells",
      0,
      Number(character.rating),
    );
    const requiredSkills = ["Alchemy", "Disenchanting"];

    requiredSkills.forEach((skill) => {
      if (!character.skills.hasOwnProperty(skill)) {
        const skillDetails = findObjectWithGivenValue(skills, skill);
        character.skills[skill] = {
          skill: skillDetails[0],
          attribute: skillDetails[1],
          limit: skillDetails[2],
          rank: Number(character.rating) + 4,
        };
      } else {
        character.skills[skill].rank += 2;
      }
    });
  } else if (specialization === "Manipulator") {
    character.spells = getRandomObjectByKey(
      spells,
      "manipulationSpells",
      0,
      Number(character.rating),
    );
    const requiredSkills = ["Spellcasting", "Assensing"];

    requiredSkills.forEach((skill) => {
      if (!character.skills.hasOwnProperty(skill)) {
        const skillDetails = findObjectWithGivenValue(skills, skill);
        character.skills[skill] = {
          skill: skillDetails[0],
          attribute: skillDetails[1],
          limit: skillDetails[2],
          rank: Number(character.rating) + 4,
        };
      } else {
        character.skills[skill].rank += 2;
      }
    });
  } else if (specialization === "Healer") {
    character.spells = getRandomObjectByKey(
      spells,
      "healthSpells",
      0,
      Number(character.rating),
    );
    const requiredSkills = ["Spellcasting", "Arcana"];

    requiredSkills.forEach((skill) => {
      if (!character.skills.hasOwnProperty(skill)) {
        const skillDetails = findObjectWithGivenValue(skills, skill);
        character.skills[skill] = {
          skill: skillDetails[0],
          attribute: skillDetails[1],
          limit: skillDetails[2],
          rank: Number(character.rating) + 4,
        };
      } else {
        character.skills[skill].rank += 2;
      }
    });
  } else if (specialization === "Blood Mage") {
    character.spells = getRandomObjectByKey(
      spells,
      "bloodSpells",
      0,
      Number(character.rating),
    );
    const requiredSkills = ["Alchemy", "Spellcasting"];

    requiredSkills.forEach((skill) => {
      if (!character.skills.hasOwnProperty(skill)) {
        const skillDetails = findObjectWithGivenValue(skills, skill);
        character.skills[skill] = {
          skill: skillDetails[0],
          attribute: skillDetails[1],
          limit: skillDetails[2],
          rank: Number(character.rating) + 4,
        };
      } else {
        character.skills[skill].rank += 2;
      }
    });
  } else if (specialization === "Witch Doctor") {
    character.spells = getRandomObjectByKey(
      spells,
      "manipulationSpells",
      0,
      Number(character.rating),
    );
    const requiredSkills = ["Summoning", "Spellcasting"];

    requiredSkills.forEach((skill) => {
      if (!character.skills.hasOwnProperty(skill)) {
        const skillDetails = findObjectWithGivenValue(skills, skill);
        character.skills[skill] = {
          skill: skillDetails[0],
          attribute: skillDetails[1],
          limit: skillDetails[2],
          rank: Number(character.rating) + 4,
        };
      } else {
        character.skills[skill].rank += 2;
      }
    });
  } else if (specialization === "Face Mage") {
    character.spells = getRandomObjectByKey(
      spells,
      "manipulationSpells",
      0,
      Number(character.rating),
    );
    const requiredSkills = ["Summoning", "Spellcasting"];

    requiredSkills.forEach((skill) => {
      if (!character.skills.hasOwnProperty(skill)) {
        const skillDetails = findObjectWithGivenValue(skills, skill);
        character.skills[skill] = {
          skill: skillDetails[0],
          attribute: skillDetails[1],
          limit: skillDetails[2],
          rank: Number(character.rating) + 4,
        };
      } else {
        character.skills[skill].rank += 2;
      }
    });
  } else if (specialization === "Insect Shaman") {
    character.spells = getRandomObjectByKey(
      spells,
      "manipulationSpells",
      0,
      Number(character.rating),
    );
    const requiredSkills = ["Summoning", "Spellcasting"];

    requiredSkills.forEach((skill) => {
      if (!character.skills.hasOwnProperty(skill)) {
        const skillDetails = findObjectWithGivenValue(skills, skill);
        character.skills[skill] = {
          skill: skillDetails[0],
          attribute: skillDetails[1],
          limit: skillDetails[2],
          rank: Number(character.rating) + 4,
        };
      } else {
        character.skills[skill].rank += 2;
      }
    });
  } else {
    return error("specialization not found");
  }

  const extraSpells = getRandomObjectsFromDepth(
    spells,
    2,
    Number(character.rating),
  );

  extraSpells.forEach((obj) => {
    if (Object.keys(character.spells).includes(obj)) {
      return;
    } else {
      character.spells[obj.name] = obj;
    }
  });
}
