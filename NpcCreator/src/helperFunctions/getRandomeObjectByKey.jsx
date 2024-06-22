export default function getRandomObjectByKey(obj, key, keyDepth, amount) {
  function findKeyAtDepth(currentObj, currentDepth) {
    if (currentDepth === keyDepth) {
      if (currentObj.hasOwnProperty(key)) {
        return currentObj[key];
      }
      return null;
    }

    if (typeof currentObj !== "object" || currentObj === null) {
      return null;
    }

    for (const k in currentObj) {
      if (currentObj.hasOwnProperty(k)) {
        const result = findKeyAtDepth(currentObj[k], currentDepth + 1);
        if (result !== null) {
          return result;
        }
      }
    }

    return null;
  }

  function getRandomSubsetFromObject(obj, num) {
    const keys = Object.keys(obj);
    const shuffledKeys = keys.sort(() => 0.5 - Math.random());
    const selectedKeys = shuffledKeys.slice(0, num);
    const subset = {};
    for (const key of selectedKeys) {
      subset[key] = obj[key];
    }
    return subset;
  }

  const targetValue = findKeyAtDepth(obj, 0);

  if (targetValue === null) {
    throw new Error(`The key '${key}' was not found at depth ${keyDepth}.`);
  }

  if (typeof targetValue !== "object" || targetValue === null) {
    throw new Error(
      `The value at key '${key}' at depth ${keyDepth} is not an object.`,
    );
  }

  return getRandomSubsetFromObject(targetValue, amount);
}
