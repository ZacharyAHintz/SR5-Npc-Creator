import getItems from "./getItems";
import getRiggerStats from "./getRiggerStats";
import getStreetSamuraiStats from "./getStreetSamuraiStats";
import setBaselineCyberware from "./setBaselineCyberware";

const specializations = ["Drone-Swarm", "RC Terminator", "Driver", "Rigger"];
// The RC Terminator Rigger is a Cheese Filled Nightmare of a build as you can grab a Anthrodrone and put Metahuman armor on it, far surpassing any armor they’re supposed to have, making a AnthroDrone in full Heavy Security Armor virtually indestructible to anything that isn’t an Antimaterial weapon, especially if your GM allows your team’s mage and technomancer to buff you up with Vehicle Armor and Diagnostic, I’ve done this, I’ve taken a glancing blow from a dragon and had the drone take no damage, while having like 40-50 dice for gunnery, combining that with Revels in Murder and i was a better streetsam than the streetsam
export default function createRigger(character) {
  character.specialization = specializations[Math.floor(Math.random() * 4)];
  getRiggerStats(character);

  setBaselineCyberware(character);

  getItems(character);
}
