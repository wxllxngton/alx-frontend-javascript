/**
 * Returns a string of all the set values that start with a specific string.
 *
 * @param {Set} set - The set to check against.
 * @param {string} startString - The string to search for at the beginning of set values.
 * @returns {string} A string containing all the set values that start with the specified string.
 */
const cleanSet = (set, startString) => {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  return [...set]
    .filter((str) => (str !== undefined ? str.startsWith(startString) : ''))
    .map((str) => (str !== undefined ? str.slice(startString.length) : ''))
    .join('-');
};

export default cleanSet;
