import { useState, useEffect } from "react";

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

const getRandomItem = (items) => {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
};

const getRandomObjectFromDepth = (obj, depth) => {
  const objectsAtDepth = collectObjectsAtDepth(obj, depth);
  return getRandomItem(objectsAtDepth);
};

export default getRandomObjectFromDepth;
