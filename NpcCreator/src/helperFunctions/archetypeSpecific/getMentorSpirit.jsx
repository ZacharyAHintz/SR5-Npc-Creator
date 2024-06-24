import getRandomObjectsFromDepth from "../getRandomObjectFromDepth";
import returnMentorSpirits from "../../components/lists/returnMentorSpirits";
import returnSkills from "../../components/lists/returnSkills";
import findObjectWithGivenValue from "../findObjectWithGivenValue";

const skillsList = returnSkills(); // Assuming skillsList is an object with skill names as keys
const mentorSpirits = returnMentorSpirits();

export default function getMentorSpirit(character) {
  const mentor = getRandomObjectsFromDepth(mentorSpirits, 1, 1);
  character.mentor = mentor;
  console.log(character.mentor[0].all);
  const mentorSkillsArray = [character.mentor[0].all];

  mentorSkillsArray.forEach((skill) => {
    // Check if the skill is not already present in character.skills
    if (!character.skills.hasOwnProperty(skill)) {
      const skillDetails = findObjectWithGivenValue(skillsList, skill);
      console.log(skillDetails);
      character.skills[skill] = {
        skill: skillDetails[0],
        attribute: skillDetails[1],
        limit: skillDetails[2],
        rank: character.rating + 4, // Assuming character.rating is defined elsewhere
      };
    } else {
      character.skills[skill].rank += 2;
    }
  });
}
