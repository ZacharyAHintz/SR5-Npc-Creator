export default function findObjectWithGivenValue(obj, value) {
  // Check if the current object has the value
  for (let key in obj) {
    if (obj[key] === value) {
      return obj;
    }
    // If the current property is an object, search recursively
    if (typeof obj[key] === "object" && obj[key] !== null) {
      let result = findObjectWithGivenValue(obj[key], value);
      if (result) {
        return result;
      }
    }
  }
  // Return null if the value is not found
  return null;
}
