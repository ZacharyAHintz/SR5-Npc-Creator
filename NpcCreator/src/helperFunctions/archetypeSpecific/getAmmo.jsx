import getRandomObjectByKey from "../getRandomeObjectByKey";
import returnAmmo from "../../components/lists/returnAmmo";

const ammo = returnAmmo();

export default function getAmmo(character) {
  const ammunition = getRandomObjectByKey(
    ammo,
    "ammunition",
    0,
    Number(character.rating),
  );
  const projectiles = getRandomObjectByKey(
    ammo,
    "ballisticProjectileConsumables",
    0,
    Number(character.rating),
  );
  const gernades = getRandomObjectByKey(
    ammo,
    "grenades",
    0,
    Number(character.rating),
  );
  character.ammunition = ammunition;
  character.projectiles = projectiles;
  character.gernades = gernades;
}
