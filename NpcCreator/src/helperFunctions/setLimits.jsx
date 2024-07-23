import updateCharacterInLocalStorage from "./updateCharacterInLocalStorage";
import getCharacterByID from "./getCharacterByID";

export default function setLimits(id) {
  const character = getCharacterByID(id);

  const intuition = Number(character.stats.intuition.total);
  const willpower = Number(character.stats.willpower.total);
  const logic = Number(character.stats.logic.total);
  const reaction = Number(character.stats.reaction.total);
  const strength = Number(character.stats.strength.total);
  const agility = Number(character.stats.agility.total);
  const body = Number(character.stats.body.total);
  const charisma = Number(character.stats.charisma.total);
  let essence = Number(character.stats.essence);
  essence > 0 ? (essence = Number(character.stats.essence)) : (essence = 1);

  function calculatePhysicalLimit(strength, body, reaction) {
    return Math.floor((strength * 2 + body + reaction) / 3);
  }

  function calculateMentalLimit(logic, intuition, willpower) {
    return Math.floor((logic * 2 + intuition + willpower) / 3);
  }

  function calculateSocialLimit(charisma, willpower, essence) {
    return Math.floor((charisma * 2 + willpower + essence) / 3);
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

  updateCharacterInLocalStorage(id, updatedCharacter);
}
