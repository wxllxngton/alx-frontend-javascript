/**
 * Extracts an array of student IDs from a list of student objects.
 *
 * @param {Array} listOfStudentsObjects - The list of student objects.
 * @returns {Array} An array containing the IDs of the students.
 */
const getListStudentIds = (listOfStudentsObjects) => {
  // Initialize an empty array to store the student IDs
  let listStudentIds = [];

  // Check if the input is an array
  if (!(listOfStudentsObjects instanceof Array)) {
    return listStudentIds; // Return an empty array if the input is not an array
  }

  // Map through the list of student objects and extract their IDs
  listStudentIds = listOfStudentsObjects.map((student) => student.id);

  // Return the array containing the student IDs
  return listStudentIds;
};

export default getListStudentIds;
