import React, { useState, useEffect } from "react";
import DiceRoller from "../../helperFunctions/DiceRoller";
import updateCharacterInLocalStorage from "../../helperFunctions/updateCharacterInLocalStorage";
import getCharacterByID from "../../helperFunctions/getCharacterByID";
import setLimits from "../../helperFunctions/setLimits";
import getRandomObjectFromDepth from "../../helperFunctions/getRandomObjectFromDepth";

export default function WeaponsComponent({ id }) {
  const [character, setCharacter] = useState(getCharacterByID(id));
  const [bonus, setBonus] = useState(0); // State for the bonus value

  useEffect(() => {
    const handleCharacterAdded = () => {
      const updatedCharacter = getCharacterByID(id);
      setCharacter(updatedCharacter);
    };

    window.addEventListener("characterAdded", handleCharacterAdded);

    return () => {
      window.removeEventListener("characterAdded", handleCharacterAdded);
    };
  }, [id]);

  function getRandomItemFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  function addSpacesBeforeCapitals(str) {
    return str.replace(/([A-Z])/g, " $1").trim();
  }

  const ammunition = character.ammunition || {};
  for (let key in ammunition) {
    if (ammunition.hasOwnProperty(key)) {
      ammunition[key].name = addSpacesBeforeCapitals(key);
    }
  }

  const guns = character.firearms || [];
  const meleeWeapons = character.meleeWeapons || [];
  const gernades = character.gernades || [];
  const armor = character.armor || [];
  const ammo = ammunition || [];
  const strength = character.stats.strength.total;
  const agility = character.stats.agility.total;
  const skills = character.skills || {};

  let containedGuns = [];
  // Flatten gun objects and add parent key
  Object.keys(guns).forEach((key) => {
    if (typeof guns[key] === "object") {
      Object.keys(guns[key]).forEach((subKey) => {
        let gunObject = { ...guns[key][subKey], parentKey: key };
        containedGuns.push(gunObject);
      });
    }
  });
  let melee = [];
  // Flatten melee weapon objects and add parent key
  Object.keys(meleeWeapons).forEach((key) => {
    if (typeof meleeWeapons[key] === "object") {
      Object.keys(meleeWeapons[key]).forEach((subKey) => {
        let meleeObject = { ...meleeWeapons[key][subKey], parentKey: key };
        melee.push(meleeObject);
      });
    }
  });

  let explosivesArray = [];
  Object.keys(gernades).forEach((key) => {
    gernades[key].name = key;
    explosivesArray.push(gernades[key]);
  });

  let armorArray = [];
  Object.keys(armor).forEach((key) => {
    armorArray.push(armor[key]);
  });

  return (
    <div>
      <h3>Guns:</h3>
      {containedGuns.map((object) => {
        const gun = object;
        const name = gun.Name;
        const accuracy = gun.Accuracy;
        const baseDV = gun.DV;
        const modes = gun.Modes;
        const type = gun.parentKey;
        const currentAmmo = getRandomObjectFromDepth(ammo, 1, 1)[0];
        const ammoDV = currentAmmo.DV;
        const ammoAP = currentAmmo.AP;
        const ammoName = currentAmmo.name;

        let weaponSkill = 0;
        Object.keys(skills).forEach((key) => {
          let skillObject = { ...skills[key] };
          if (skillObject.skill === type) {
            weaponSkill = skillObject.rank;
          }
        });
        const skillTotal = parseInt(agility) + parseInt(weaponSkill);
        const hitTotal =
          parseInt(agility) + parseInt(weaponSkill) + parseInt(bonus);
        const totalDV = parseInt(baseDV) + parseInt(ammoDV);

        return (
          <div key={object}>
            <h3>{name}</h3>

            <div>Type: {type}</div>
            <div>Accuracy: {accuracy}</div>
            <div>Base Damage: {baseDV}</div>
            <div>Modes: {modes}</div>
            <div>Ammo: {ammoName}</div>
            <div>AP: {ammoAP}</div>
            <div>Ammo Damage: {ammoDV}</div>

            <div>
              <div>
                <div>Damage: {totalDV}</div>
              </div>
              <div>Skill: {skillTotal}</div>
              <div>
                Bonus:
                <input
                  type="number"
                  value={bonus}
                  onChange={(e) => setBonus(Number(e.target.value))} // Update bonus state
                />
              </div>
              <DiceRoller total={hitTotal} />
            </div>
          </div>
        );
      })}
      <hr />
      <h3>Melee:</h3>
      {melee.map((object) => {
        const gun = object;
        const name = gun.Name;
        const accuracy = gun.Accuracy;
        const baseDV = gun.DV;
        const modes = gun.Modes;
        const type = gun.parentKey;
        const ap = gun.AP;

        let weaponSkill = 0;
        Object.keys(skills).forEach((key) => {
          let skillObject = { ...skills[key] };
          if (skillObject.skill === type) {
            weaponSkill = skillObject.rank;
          }
        });
        const skillTotal = parseInt(agility) + parseInt(weaponSkill);
        const hitTotal =
          parseInt(agility) + parseInt(weaponSkill) + parseInt(bonus);
        const totalDV = parseInt(baseDV) + parseInt(strength);

        return (
          <div key={object}>
            <h3>{name}</h3>

            <div>Type: {type}</div>
            <div>Accuracy: {accuracy}</div>
            <div>Base Damage: {baseDV}</div>
            <div>AP: {ap}</div>

            <div>
              <div>
                <div>Damage: {totalDV}</div>
              </div>
              <div>Skill: {skillTotal}</div>
              <div>
                Bonus:
                <input
                  type="number"
                  value={bonus}
                  onChange={(e) => setBonus(Number(e.target.value))} // Update bonus state
                />
              </div>
              <DiceRoller total={hitTotal} />
            </div>
          </div>
        );
      })}
      <hr />
      <h3>Explosives:</h3>
      {explosivesArray.map((object) => {
        const name = object.name;
        const baseDV = object.DV;
        const ap = object.DV;
        const blastRadius = object.Blast;

        return (
          <div key={object}>
            <h3>{name}</h3>
            <div>Damage: {baseDV}</div>
            <div>AP: {ap}</div>
            <div>Blast Radius: {blastRadius}</div>
          </div>
        );
      })}
      <hr />
      <h3>Armor:</h3>
      {armorArray.map((object) => {
        const name = object.article;
        const armorRating = object.armorRating;
        const capacity = object.capacity;
        const source = object.source;

        return (
          <div key={object}>
            <h3>{name}</h3>
            <div>
              Armor: {armorRating} Capacity: {capacity} Book: {source}
            </div>
          </div>
        );
      })}
    </div>
  );
}
