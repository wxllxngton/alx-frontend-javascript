/**
 * Returns a string of all the set values that start with a specific string.
 *
 * @param {Set} set - The set to check against.
 * @param {string} startString - The string to search for at the beginning of set values.
 * @returns {string} A string containing all the set values that start with the specified string.
 */
const cleanSet = (set, startString) => {
  // Check if startString is an empty string
  if (startString === '') {
    return ''; // Return an empty string if startString is empty
  }

  /**
     * Convert the set to an array,
     * filter values starting with startString,
     * and join them into a string
     */
  return Array.from(set)
    .filter((el) => el.startsWith(startString))
    .map((el) => el.slice(startString.length))
    .join('-');
};

export default cleanSet;
