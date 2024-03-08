/**
 * This script implements a class named ClassRoom.
 */
export default class ClassRoom {
  /**
     * Initializes an instance of the ClassRoom class.
     *
     * @constructor
     * @param {number} maxStudentSize - The maximum number of students the class can accommodate.
     */
  constructor(maxStudentSize) {
    /**
         * The maximum number of students the class can accommodate.
         * @type {number}
         * @private
         */
    this._maxStudentsSize = maxStudentSize;
  }
}
