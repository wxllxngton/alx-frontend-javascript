/**
 * Represents the Airport class.
 * @class
 */
export default class Airport {
  /**
     * Constructs an Airport object.
     *
     * @param {string} name - The name of the airport.
     * @param {string} code - The code of the airport.
     */
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  /**
     * Gets the name of the airport.
     *
     * @returns {string} The name.
     */
  get name() {
    return this._name;
  }

  /**
     * Sets the name of the airport.
     *
     * @param {string} value - The name to set.
     */
  set name(value) {
    this._name = value;
  }

  /**
     * Gets the code of the airport.
     *
     * @returns {string} The code.
     */
  get code() {
    return this._code;
  }

  /**
     * Sets the code of the airport.
     *
     * @param {string} value - The code to set.
     */
  set code(value) {
    this._code = value;
  }

  /**
     * Gets the string tag for the airport.
     *
     * @returns {string} The code as the string tag.
     */
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
