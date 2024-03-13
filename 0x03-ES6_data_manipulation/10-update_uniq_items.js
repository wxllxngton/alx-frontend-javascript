/**
 * Returns an updated map for all items with initial quantity at 1.
 *
 * @param {Map} map - The map to be updated.
 * @returns {Map} The updated map.
 */
const updateUniqueItems = (map) => {
  if (!(map instanceof Map)) throw new Error('Cannot process');

  map.forEach((value, key) => {
    if (value === 1) map.set(key, 100);
  });

  return map; // Return the updated map
};

export default updateUniqueItems;
