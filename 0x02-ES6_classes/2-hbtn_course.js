/**
 * Represents a Holberton course with attributes such as name, length, and students.
 */
export default class HolbertonCourse {
    /**
     * Initializes a HolbertonCourse object.
     *
     * @param {string} name - The name of the course.
     * @param {number} length - The length of the course.
     * @param {Array<string>} students - An array of student names.
     * @throws {TypeError} If the provided arguments have incorrect types.
     */
    constructor(name, length, students) {
        /**
         * The name of the course.
         * @type {string}
         * @private
         */
        this._name = name;

        /**
         * The length of the course.
         * @type {number}
         * @private
         */
        this._length = length;

        /**
         * An array of student names.
         * @type {Array<string>}
         * @private
         */
        this._students = students;
    }

    /**
     * Gets the name of the course.
     *
     * @returns {string} The name of the course.
     */
    get name() {
        return this._name;
    }

    /**
     * Sets a new name for the course.
     *
     * @param {string} name - The new name for the course.
     * @throws {TypeError} If the provided name is not a string.
     */
    set name(name) {
        if (typeof name !== 'string' && !(name instanceof String)) {
            throw new TypeError('Name must be a string');
        }
        this._name = name;
    }

    /**
     * Gets the length of the course.
     *
     * @returns {number} The length of the course.
     */
    get length() {
        return this._length;
    }

    /**
     * Sets a new length for the course.
     *
     * @param {number} length - The new length for the course.
     * @throws {TypeError} If the provided length is not a number.
     */
    set length(length) {
        if (typeof length !== 'number' && !(length instanceof Number)) {
            throw new TypeError('Length must be a number');
        }
        this._length = length;
    }

    /**
     * Gets the array of student names.
     *
     * @returns {Array<string>} An array of student names.
     */
    get students() {
        return this._students;
    }

    /**
     * Sets a new array of student names for the course.
     *
     * @param {Array<string>} students - The new array of student names.
     * @throws {TypeError} If the provided students is not an array of strings.
     */
    set students(students) {
        if (
            !(students instanceof Array) ||
            !students.every((s) => typeof s === 'string')
        ) {
            throw new TypeError('Students must be an array of strings');
        }
        this._students = students;
    }
}
