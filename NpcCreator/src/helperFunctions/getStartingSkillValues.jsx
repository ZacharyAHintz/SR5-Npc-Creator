const getStartingSkillValues = (skills, rating) => {
  const getRandomRank = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  let minRank, maxRank;
  if (rating === 1) {
    minRank = 1;
    maxRank = 4;
  } else if (rating === 2) {
    minRank = 1;
    maxRank = 5;
  } else if (rating === 3) {
    minRank = 2;
    maxRank = 6;
  } else if (rating === 4) {
    minRank = 2;
    maxRank = 7;
  } else if (rating === 5) {
    minRank = 3;
    maxRank = 8;
  } else if (rating === 6) {
    minRank = 4;
    maxRank = 12;
  } else {
    throw new Error("Rating must be either 1 - 6");
  }

  return skills.map((skill) => ({
    skill: skill[0],
    attribute: skill[1],
    limit: skill[2],
    rank: getRandomRank(minRank, maxRank),
  }));
};

export default getStartingSkillValues;
