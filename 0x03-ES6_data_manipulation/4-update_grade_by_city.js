/**
 * Updates the grade of students in a specific city based on the provided new grades.
 *
 * @param {Array} listOfStudentObjects - The array of student objects.
 * @param {string} city - The city for which to update the grades.
 * @param {Array} newGrades - An array of objects containing new grades for students.
 * @returns {Array} An array of student objects with updated grades for the specified city.
 */
/* eslint-disable-next-line max-len */
const updateStudentGradeByCity = (listOfStudentObjects, city, newGrades) => listOfStudentObjects.map((studentObject) => {
  const student = studentObject;
  if (student.location === city) {
    const matchingGrade = newGrades.find(
      (gradeInfo) => gradeInfo.studentId === student.id,
    );
    student.grade = matchingGrade ? matchingGrade.grade : 'N/A';
  }
  return student;
});

export default updateStudentGradeByCity;
