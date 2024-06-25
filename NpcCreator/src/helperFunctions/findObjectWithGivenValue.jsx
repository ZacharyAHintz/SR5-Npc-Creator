export default function findObjectWithGivenValue(obj, value) {
  for (let key in obj) {
    if (obj[key] === value) {
      return obj;
    }

    if (typeof obj[key] === "object" && obj[key] !== null) {
      let result = findObjectWithGivenValue(obj[key], value);
      if (result) {
        return result;
      }
    }
  }

  return null;
}
