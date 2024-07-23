import React, { useState, useEffect } from "react";
import DiceRoller from "../../helperFunctions/DiceRoller";
import updateCharacterInLocalStorage from "../../helperFunctions/updateCharacterInLocalStorage";
import getCharacterByID from "../../helperFunctions/getCharacterByID";
import setLimits from "../../helperFunctions/setLimits";

export default function WeaponsComponent({ id }) {
  const [character, setCharacter] = useState(getCharacterByID(id));

  const guns = character.firearms || [];
  const vehicles = character.vehicles || [];
  const drones = character.drones || [];
  const meleeWeapons = character.meleeWeapons || [];
  const security = character.security || [];
  const explosives = character.explosives || [];
  const armor = character.armor || [];
  const ammo = character.ammo || [];
  const projectiles = character.projectiles || [];
  const misc = character.misc || [];

  let containedGuns = [];
  //flatten gun objects and add parent key
  Object.keys(guns).forEach((key) => {
    if (typeof guns[key] === "object") {
      Object.keys(guns[key]).forEach((subKey) => {
        let gunObject = { ...guns[key][subKey], parentKey: key };
        containedGuns.push(gunObject);
      });
    }
  });

  console.log(containedGuns);

  //   return (
  //     <div>
  //       {containedGuns.map((key) => {
  //         const stat = character.stats[key];
  //         const baseStats = stat?.baseStats;
  //         const bonus = stat?.bonus ?? 0;
  //         const total = stat?.total ?? parseInt(baseStats) + parseInt(bonus);
  //         const editedValue = editedStats[key]?.baseStats ?? baseStats;
  //         const editedBonus = editedStats[key]?.bonus ?? bonus;

  //         return (
  //           <div key={key}>
  //             <h3>{key.charAt(0).toUpperCase() + key.slice(1)} Stats</h3>
  //             {baseStats !== undefined ? (
  //               <div>
  //                 <div>
  //                   Base:
  //                   <input
  //                     type="number"
  //                     value={editedValue}
  //                     onChange={(e) => {
  //                       handleBaseStatsChange(key, e.target.value, editedBonus);
  //                     }}
  //                   />
  //                 </div>
  //                 <div>
  //                   Bonus:
  //                   <input
  //                     type="number"
  //                     value={editedBonus}
  //                     onChange={(e) => {
  //                       handleBaseStatsChange(key, editedValue, e.target.value);
  //                     }}
  //                   />
  //                 </div>
  //                 <div>Total: {total}</div>
  //                 <DiceRoller total={total} />
  //               </div>
  //             ) : (
  //               <div>
  //                 <p>Base Stats: Not available</p>
  //               </div>
  //             )}
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );
}
