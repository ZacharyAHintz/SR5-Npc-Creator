const collectObjectsAtDepth = (obj, depth) => {
  if (depth === 0 && typeof obj === "object" && obj !== null) {
    return [obj];
  }

  if (depth > 0 && typeof obj === "object" && obj !== null) {
    return Object.values(obj).reduce((acc, value) => {
      return acc.concat(collectObjectsAtDepth(value, depth - 1));
    }, []);
  }

  return [];
};

const getRandomItems = (items, amount) => {
  if (amount >= items.length) {
    return items;
  }

  const randomItems = new Set();
  while (randomItems.size < amount) {
    const randomIndex = Math.floor(Math.random() * items.length);
    randomItems.add(items[randomIndex]);
  }

  return Array.from(randomItems);
};

const getRandomObjectsFromDepth = (obj, depth, amount) => {
  const objectsAtDepth = collectObjectsAtDepth(obj, depth);
  return getRandomItems(objectsAtDepth, amount);
};

export default getRandomObjectsFromDepth;
