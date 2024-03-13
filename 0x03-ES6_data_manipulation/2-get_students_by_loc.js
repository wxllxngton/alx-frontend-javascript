/**
 * Filters an array of student objects to return only those located in a specific city.
 *
 * @param {Array} listOfStudentObjects - The array of student objects.
 * @param {string} city - The city to filter the student objects by.
 * @returns {Array} An array of student objects located in the specified city.
 */
const getStudentsByLocation = (listOfStudentObjects, city) => listOfStudentObjects.filter(
  (studentObject) => studentObject.location === city,
);

export default getStudentsByLocation;
