export default function toCamelCase(str) {
  return str
    .toString()
    .toLowerCase()
    .split(/[\s-_]+/) // Split the string into words based on spaces, hyphens, or underscores
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1),
    ) // Capitalize the first letter of each word except the first word
    .join(""); // Join the words back together
}
