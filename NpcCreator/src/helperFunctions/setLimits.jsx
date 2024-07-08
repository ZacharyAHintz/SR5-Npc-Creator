import React, { useState, useEffect } from "react";

export default function setLimits(character) {
  const [currentCharacter, setCurrentCharacter] = useState(character);

  const intuition = character.stats.intuition.baseStats;
  const willpower = character.stats.willpower.baseStats;
  const logic = character.stats.logic.baseStats;
  const reaction = character.stats.reaction.baseStats;
  const strength = character.stats.strength.baseStats;
  const agility = character.stats.agility.baseStats;
  const body = character.stats.body.baseStats;
  const charisma = character.stats.charisma.baseStats;
  const essence = character.essence;

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
    setCurrentCharacter(updatedCharacter);
    localStorage.setItem("character", JSON.stringify(updatedCharacter));
  }, [setCurrentCharacter, character]);
}
