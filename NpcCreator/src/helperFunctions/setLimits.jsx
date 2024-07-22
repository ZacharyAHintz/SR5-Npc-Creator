import updateCharacterInLocalStorage from "./updateCharacterInLocalStorage";
import getCharacterByID from "./getCharacterByID";

export default function setLimits(id) {
  const character = getCharacterByID(id);

  const intuition = character.stats.intuition.total;
  const willpower = character.stats.willpower.total;
  const logic = character.stats.logic.total;
  const reaction = character.stats.reaction.total;
  const strength = character.stats.strength.total;
  const agility = character.stats.agility.total;
  const body = character.stats.body.total;
  const charisma = character.stats.charisma.total;
  const essence = character.stats.essence;

  function calculatePhysicalLimit(strength, body, reaction) {
    return Math.floor(Number(strength * 2 + body + reaction) / 3);
  }

  function calculateMentalLimit(logic, intuition, willpower) {
    return Math.floor(Number(logic * 2 + intuition + willpower) / 3);
  }

  function calculateSocialLimit(charisma, willpower, essence) {
    return Math.floor(Number(charisma * 2 + willpower + essence) / 3);
  }

  const newPhysicalLimit = calculatePhysicalLimit(strength, body, reaction);
  const newMentalLimit = calculateMentalLimit(logic, intuition, willpower);
  const newSocialLimit = calculateSocialLimit(charisma, willpower, essence);

  const updatedCharacter = {
    ...character,
    physicalLimit: newPhysicalLimit,
    mentalLimit: newMentalLimit,
    socialLimit: newSocialLimit,
  };
  console.log(newPhysicalLimit);
  console.log(character);

  updateCharacterInLocalStorage(character.id, updatedCharacter);
}
