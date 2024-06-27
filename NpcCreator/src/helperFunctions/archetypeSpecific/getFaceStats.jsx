export default function getFaceStats(character) {
  function splitStatsFromLimit(stats) {
    const [baseStats, limit] = stats.split("/");
    return { baseStats: Number(baseStats), limit: Number(limit) };
  }

  character.stats = {
    body: splitStatsFromLimit(character.race[0].body),
    agility: splitStatsFromLimit(character.race[0].agility),
    reaction: splitStatsFromLimit(character.race[0].reaction),
    strength: splitStatsFromLimit(character.race[0].strength),
    willpower: splitStatsFromLimit(character.race[0].willpower),
    logic: splitStatsFromLimit(character.race[0].logic),
    intuition: splitStatsFromLimit(character.race[0].intuition),
    charisma: splitStatsFromLimit(character.race[0].charisma),
    magic: Number(character.rating) + Math.floor(Math.random() * 4) + 1,
    edge: Number(character.rating) - Math.floor(Math.random() * 3) + 1,
    essence: 6,
  };

  character.stats.charisma.baseStats += Number(character.rating);

  character.stats.agility.baseStats += Number(character.rating);

  function distributePoints(totalPoints) {
    const statsArray = [
      character.stats.body,
      character.stats.agility,
      character.stats.reaction,
      character.stats.strength,
      character.stats.willpower,
      character.stats.logic,
      character.stats.intuition,
      character.stats.charisma,
    ];

    let attempts = 0;
    const maxAttempts = totalPoints * 10;

    while (totalPoints > 0 && attempts < maxAttempts) {
      const randomIndex = Math.floor(Math.random() * statsArray.length);
      const stat = statsArray[randomIndex];

      const maxPointsToAdd = stat.limit - stat.baseStats;
      if (maxPointsToAdd > 0) {
        const pointsToAdd = Math.min(
          maxPointsToAdd,
          totalPoints,
          Math.floor(Math.random() * maxPointsToAdd) + 1,
        );
        stat.baseStats += pointsToAdd;
        totalPoints -= pointsToAdd;
      }
      attempts++;
    }

    return statsArray;
  }

  distributePoints(Number(character.rating) * 2 + 4);
}
