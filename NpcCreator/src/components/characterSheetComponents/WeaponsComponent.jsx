import React, { useState, useEffect } from "react";
import DiceRoller from "../../helperFunctions/DiceRoller";
import getCharacterByID from "../../helperFunctions/getCharacterByID";
import getRandomObjectFromDepth from "../../helperFunctions/getRandomObjectFromDepth";
import styles from "../../styles/WeaponsComponent.module.css";

export default function WeaponsComponent({ id }) {
  const [character, setCharacter] = useState(getCharacterByID(id));
  const [bonus, setBonus] = useState(0);
  const [selectedAmmo, setSelectedAmmo] = useState(null);

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

  // Set the initial ammo when the character is first loaded
  useEffect(() => {
    const ammunition = character.ammunition || {};
    if (Object.keys(ammunition).length > 0) {
      const initialAmmo = getRandomObjectFromDepth(ammunition, 1, 1)[0];
      setSelectedAmmo(initialAmmo);
    }
  }, [character]);

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
      <h3 className={styles.title}>Guns:</h3>
      {containedGuns.map((object, index) => {
        const gun = object;
        const name = gun.Name;
        const accuracy = gun.Accuracy;
        const baseDV = gun.DV;
        const modes = gun.Modes;
        const type = gun.parentKey;

        const currentAmmo = selectedAmmo || {}; // Use selected ammo
        const ammoDV = currentAmmo.DV || 0;
        const ammoAP = currentAmmo.AP || 0;
        const ammoName = currentAmmo.name || "No ammo";

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
          <div key={`gun-${index}`} className={styles.input}>
            <h3 className={styles.title}>{name}</h3>
            <div>Type: {type}</div>
            <div>Accuracy: {accuracy}</div>
            <div>Base Damage: {baseDV}</div>
            <div>Modes: {modes}</div>
            <div>Ammo: {ammoName}</div>
            <div>AP: {ammoAP}</div>
            <div>Ammo Damage: {ammoDV}</div>
            <div className={styles.result}>
              <div>Damage: {totalDV}</div>
              <div>Skill: {skillTotal}</div>
              <div>
                Bonus:
                <input
                  type="number"
                  value={bonus}
                  onChange={(e) => setBonus(Number(e.target.value))} // Update bonus state
                  className={styles.input}
                />
              </div>
              <DiceRoller total={hitTotal} />
            </div>
          </div>
        );
      })}
      <hr className={styles.separator} />
      <h3 className={styles.title}>Melee:</h3>
      {melee.map((object, index) => {
        const meleeWeapon = object;
        const name = meleeWeapon.Name;
        const accuracy = meleeWeapon.Accuracy;
        const baseDV = meleeWeapon.DV;
        const type = meleeWeapon.parentKey;
        const ap = meleeWeapon.AP;

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
          <div key={`melee-${index}`} className={styles.input}>
            <h3 className={styles.title}>{name}</h3>
            <div>Type: {type}</div>
            <div>Accuracy: {accuracy}</div>
            <div>Base Damage: {baseDV}</div>
            <div>AP: {ap}</div>
            <div className={styles.result}>
              <div>Damage: {totalDV}</div>
              <div>Skill: {skillTotal}</div>
              <div>
                Bonus:
                <input
                  type="number"
                  value={bonus}
                  onChange={(e) => setBonus(Number(e.target.value))} // Update bonus state
                  className={styles.input}
                />
              </div>
              <DiceRoller total={hitTotal} />
            </div>
          </div>
        );
      })}
      <hr className={styles.separator} />
      <h3 className={styles.title}>Explosives:</h3>
      {explosivesArray.map((object, index) => {
        const name = object.name;
        const baseDV = object.DV;
        const ap = object.DV;
        const blastRadius = object.Blast;

        return (
          <div key={`explosive-${index}`} className={styles.input}>
            <h3 className={styles.title}>{name}</h3>
            <div>Damage: {baseDV}</div>
            <div>AP: {ap}</div>
            <div>Blast Radius: {blastRadius}</div>
          </div>
        );
      })}
      <hr className={styles.separator} />
      <h3 className={styles.title}>Armor:</h3>
      {armorArray.map((object, index) => {
        const name = object.article;
        const armorRating = object.armorRating;
        const capacity = object.capacity;
        const source = object.source;

        return (
          <div key={`armor-${index}`} className={styles.input}>
            <h3 className={styles.title}>{name}</h3>
            <div>
              Armor: {armorRating} Capacity: {capacity} Book: {source}
            </div>
          </div>
        );
      })}
    </div>
  );
}
