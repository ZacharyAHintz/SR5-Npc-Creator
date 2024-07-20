import React, { useState, useEffect } from "react";
import updateCharacterInLocalStorage from "./updateCharacterInLocalStorage";

export default function setLimits(character) {
  const [currentCharacter, setCurrentCharacter] = useState(character);

  const intuition = character.stats.intuition.total;
  const willpower = character.stats.willpower.total;
  const logic = character.stats.logic.total;
  const reaction = character.stats.reaction.total;
  const strength = character.stats.strength.total;
  const agility = character.stats.agility.total;
  const body = character.stats.body.total;
  const charisma = character.stats.charisma.total;
  const essence = character.stats.essence;

  const [physicalLimit, setPhysicalLimit] = useState(0);
  const [mentalLimit, setMentalLimit] = useState(0);
  const [socialLimit, setSocialLimit] = useState(0);

  function calculatePhysicalLimit(strength, body, reaction) {
    return Math.floor((strength * 2 + body + reaction) / 3);
  }

  function calculateMentalLimit(logic, intuition, willpower) {
    return Math.floor((logic * 2 + intuition + willpower) / 3);
  }

  function calculateSocialLimit(charisma, willpower, essence) {
    return Math.floor((charisma * 2 + willpower + essence) / 3);
  }

  useEffect(() => {
    const newPhysicalLimit = calculatePhysicalLimit(strength, body, reaction);
    const newMentalLimit = calculateMentalLimit(logic, intuition, willpower);
    const newSocialLimit = calculateSocialLimit(charisma, willpower, essence);

    setPhysicalLimit(newPhysicalLimit);
    setMentalLimit(newMentalLimit);
    setSocialLimit(newSocialLimit);

    const updatedCharacter = {
      ...character,
      physicalLimit: newPhysicalLimit,
      mentalLimit: newMentalLimit,
      socialLimit: newSocialLimit,
    };

    updateCharacterInLocalStorage(character.id, updatedCharacter);
  }, []);
}
