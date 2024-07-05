import returnCyberware from "../../components/lists/returnCyberware";
import getRandomeObjectByKey from "../getRandomeObjectByKey";
import setCyberware from "../setCyberware";
import returnSkills from "../../components/lists/returnSkills";
import setBaselineCyberware from "./setBaselineCyberware";

const skills = returnSkills();

const cyberware = returnCyberware();
export default function getCyberware(character) {
  //set waregrade
  if (Number(character.rating) === 6) {
    character.wareGrade = cyberware.wareGrades.deltaware;
  } else {
    character.wareGrade = getRandomeObjectByKey(cyberware, "wareGrades", 0, 1);
  }

  //set cyberlevel
  if (character.specialization === "Cyberzombie") {
    character.cyberLevel = 6;
  } else if (
    character.specialization === "Cyber Face" ||
    character.specialization === "Burnt Adept" ||
    character.specialization === "Cyberspike Assasin"
  ) {
    character.cyberLevel = Math.floor(Math.random() * 3) + 1;
  } else {
    character.cyberLevel = Math.floor(Math.random() * 5) + 1;
  }

  setBaselineCyberware(character);
  setCyberware(character);

  if (!character.currentArmor) {
    character.currentArmor = 0;
  }

  character.cyberware.forEach((ware) => {
    let addedStats = ware[Object.getOwnPropertyNames(ware)].addedStats;
    if (addedStats) {
      if (addedStats[0] === "skills") {
        if (character.skills.hasOwnProperty(addedStats[1])) {
          character.skills[addedStats[0]].rank += addStats[2];
        } else {
          character.skills[addedStats[1]] =
            skills[addedStats[3]][addedStats[1]];

          character.skills[addedStats[1]].rating = addedStats[2];
        }
      } else if (addedStats[0] === "stats") {
        character.stats[addedStats[1]].baseStats += addedStats[2];
      } else {
        character.currentArmor += addedStats[2];
      }
    }
  });

  character.cyberware.forEach((ware) => {
    let addedStatsTwo = ware[Object.getOwnPropertyNames(ware)].addedStatsTwo;
    if (addedStatsTwo) {
      if (addedStatsTwo[0] === "skills") {
        if (character.skills.hasOwnProperty(addedStatsTwo[1])) {
          character.skills[addedStatsTwo[0]].rank += addStats[2];
        } else {
          character.skills[addedStatsTwo[1]] =
            skills[addedStatsTwo[3]][addedStatsTwo[1]];
          character.skills[addedStatsTwo[1]].rating = addedStatsTwo[2];
        }
      } else if (addedStatsTwo[0] === "stats") {
        character.stats[addedStatsTwo[1]].baseStats += addedStatsTwo[2];
      } else {
        character.currentArmor += addedStatsTwo[2];
      }
    }
  });
  character.cyberware.forEach((ware) => {
    let addedStatsThree =
      ware[Object.getOwnPropertyNames(ware)].addedStatsThree;
    if (addedStatsThree) {
      if (addedStatsThree[0] === "skills") {
        if (character.skills.hasOwnProperty(addedStatsThree[1])) {
          character.skills[addedStatsThree[0]].rank += addStats[2];
        } else {
          character.skills[addedStatsThree[1]] =
            skills[addedStatsThree[3]][addedStatsThree[1]];
          character.skills[addedStatsThree[1]].rating = addedStatsThree[2];
        }
      } else if (addedStatsThree[0] === "stats") {
        character.stats[addedStatsThree[1]].baseStats += addedStatsThree[2];
      } else {
        character.currentArmor += addedStatsThree[2];
      }
    }
  });
  character.cyberware.forEach((ware) => {
    let addedStatsFour = ware[Object.getOwnPropertyNames(ware)].addedStatsFour;
    if (addedStatsFour) {
      if (addedStatsFour[0] === "skills") {
        if (character.skills.hasOwnProperty(addedStatsFour[1])) {
          character.skills[addedStatsFour[0]].rank += addStats[2];
        } else {
          character.skills[addedStatsFour[1]] =
            skills[addedStatsFour[3]][addedStatsFour[1]];
          character.skills[addedStatsFour[1]].rating = addedStatsFour[2];
        }
      } else if (addedStatsFour[0] === "stats") {
        character.stats[addedStatsFour[1]].baseStats += addedStatsFour[2];
      } else {
        character.currentArmor += addedStatsFour[2];
      }
    }
  });

  character.stats.essence = character.stats.essence - character.cyberLevel;

  // make capacity fonction
}
