import getTechnomancerStats from "./getTechnomancerStats";
import getCyberware from "./getCyberware";
import getItems from "./getItems";
import setBaselineCyberware from "./setBaselineCyberware";
import getRandomeObjectByPrice from "../getRandomeObjectByPrice";
import returnElectronics from "../../components/lists/returnElectronics";
import getRandomObjectsFromDepth from "../getRandomObjectFromDepth";
import returnComplexForms from "../../components/lists/returnComplexForms";

const complexForms = returnComplexForms();
const electronics = returnElectronics();
const specializations = [
  "Otaku",
  "Decknomancer",
  "Petnomancer",
  "Cyberspike Assasin",
  "Diagnostic 'Rigger'",
];

let cyberdeck = null;

function getCyberdeck(character) {
  if (Number(character.rating) === 6) {
    cyberdeck = getRandomeObjectByPrice(
      electronics,
      "cyberdecks",
      0,
      1,
      "cost",
      "over",
      800000,
    );
  } else if (Number(character.rating) === 5) {
    cyberdeck = getRandomeObjectByPrice(
      electronics,
      "cyberdecks",
      0,
      1,
      "cost",
      "over",
      500000,
    );
  } else if (Number(character.rating) === 4) {
    cyberdeck = getRandomeObjectByPrice(
      electronics,
      "cyberdecks",
      0,
      1,
      "cost",
      "under",
      400000,
    );
  } else if (Number(character.rating) === 3) {
    cyberdeck = getRandomeObjectByPrice(
      electronics,
      "cyberdecks",
      0,
      1,
      "cost",
      "under",
      300000,
    );
  } else if (Number(character.rating) === 2) {
    cyberdeck = getRandomeObjectByPrice(
      electronics,
      "cyberdecks",
      0,
      1,
      "cost",
      "under",
      100000,
    );
  } else if (Number(character.rating) === 1) {
    cyberdeck = getRandomeObjectByPrice(
      electronics,
      "cyberdecks",
      0,
      1,
      "cost",
      "under",
      50000,
    );
  }
  character.cyberdeck = cyberdeck;
}
export default function createTechnomancer(character) {
  character.specialization = specializations[Math.floor(Math.random() * 5)];
  if (character.specialization !== "Cyberspike Assasin") {
    getTechnomancerStats(character);
  } else {
    setBaselineCyberware(character);
  }

  if (character.specialization === "Decknomancer") {
    getCyberdeck(character);
  }

  let loopCounter = Number(character.rating) + 2;
  let complexFormsList = [];
  while (loopCounter > 0) {
    const complexForm = getRandomObjectsFromDepth(complexForms, 1, 1);

    const containsObject = complexFormsList.some(
      (item) => item.name === complexForm[0].name,
    );

    if (containsObject === false) {
      complexFormsList.push(complexForm[0]);
      loopCounter--;
    }
  }
  character.complexForms = complexFormsList;

  getItems(character);
}
