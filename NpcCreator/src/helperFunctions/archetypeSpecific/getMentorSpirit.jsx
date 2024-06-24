import getRandomObjectsFromDepth from "../getRandomObjectFromDepth";
import returnMentorSpirits from "../../components/lists/returnMentorSpirits";

const mentorSpirits = returnMentorSpirits();

export default function getMentorSpirit() {
  const mentor = getRandomObjectsFromDepth(mentorSpirits, 0, 1);
  return mentor;
}
