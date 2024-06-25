import getRandomObjectsFromDepth from "../getRandomObjectFromDepth";
import returnMentorSpirits from "../../components/lists/returnMentorSpirits";
import returnSkills from "../../components/lists/returnSkills";
import findObjectWithGivenValue from "../findObjectWithGivenValue";

const skillsList = returnSkills();

const mentorSpirits = returnMentorSpirits();

export default function getMentorSpirit(character) {
  const mentor = getRandomObjectsFromDepth(mentorSpirits, 1, 1);
  character.mentor = mentor;

  const mentorSkillsArray = [character.mentor[0].all];
  console.log(mentor);

  mentorSkillsArray.forEach((skill) => {
    if (!character.skills.hasOwnProperty(skill)) {
      const skillDetails = findObjectWithGivenValue(skillsList, skill);
      character.skills[skill] = {
        skill: skillDetails[0],
        attribute: skillDetails[1],
        limit: skillDetails[2],
        rank: character.rating + 4,
      };
    } else {
      character.skills[skill].rank += 2;
    }
  });
}
