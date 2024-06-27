// priceKey = whatever key you want to filter by
// direction = "over" or "under"

export default function getRandomeObjectByPrice(
  obj,
  key,
  keyDepth,
  amount,
  priceKey,
  direction,
  priceAmount,
) {
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

  function filterObjectsByPrice(objects, priceKey, direction, priceAmount) {
    return Object.fromEntries(
      Object.entries(objects).filter(([key, value]) => {
        if (
          typeof value === "object" &&
          value !== null &&
          value.hasOwnProperty(priceKey)
        ) {
          if (direction === "over") {
            return value[priceKey] > priceAmount;
          } else if (direction === "under") {
            return value[priceKey] < priceAmount;
          }
        }
        return false;
      }),
    );
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

  const filteredObjects = filterObjectsByPrice(
    targetValue,
    priceKey,
    direction,
    priceAmount,
  );

  if (Object.keys(filteredObjects).length < amount) {
    console.warn(
      `Not enough objects found with the specified price criteria. Returning available objects.`,
    );
    return getRandomSubsetFromObject(
      filteredObjects,
      Object.keys(filteredObjects).length,
    );
  }

  return getRandomSubsetFromObject(filteredObjects, amount);
}
