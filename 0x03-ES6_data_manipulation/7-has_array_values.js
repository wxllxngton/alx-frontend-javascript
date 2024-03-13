/**
 * Checks if all elements in the array exist within the set.
 *
 * @param {Set} set - The set to check against.
 * @param {Array} arr - The array containing elements to check.
 * @returns {boolean} True if all elements in the array exist in the set, false otherwise.
 */
const hasValuesFromArray = (set, arr) => arr.every((item) => set.has(item));

export default hasValuesFromArray;
