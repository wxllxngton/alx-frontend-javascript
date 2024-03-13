/**
 * Calculates the sum of all student IDs in the given list of student objects.
 *
 * @param {Array} listOfStudentObjects - The array of student objects.
 * @returns {number} The sum of all student IDs.
 */
const getStudentIdsSum = (listOfStudentObjects) => {
  const initialValue = 0;
  const sumWithInitial = listOfStudentObjects.reduce(
    (acc, cur) => acc + cur.id,
    initialValue,
  );

  return sumWithInitial;
};

export default getStudentIdsSum;
