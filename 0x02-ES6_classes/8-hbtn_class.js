/**
 * Represents the HolbertonClass class.
 * @class
 */
export default class HolbertonClass {
  /**
     * Constructs a HolbertonClass object.
     *
     * @param {number} size - The size of the HolbertonClass.
     * @param {string} location - The location of the HolbertonClass.
     */
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  /**
     * Gets the size of the HolbertonClass.
     *
     * @returns {number} The size.
     */
  get size() {
    return this._size;
  }

  /**
     * Sets the size of the HolbertonClass.
     *
     * @param {number} value - The size to set.
     */
  set size(value) {
    this._size = value;
  }

  /**
     * Gets the location of the HolbertonClass.
     *
     * @returns {string} The location.
     */
  get location() {
    return this._location;
  }

  /**
     * Sets the location of the HolbertonClass.
     *
     * @param {string} value - The location to set.
     */
  set location(value) {
    this._location = value;
  }

  /**
     * Implements the [Symbol.toPrimitive] method to provide custom conversions.
     *
     * @param {string} hint - The conversion hint ('number', 'string', or 'default').
     * @returns {number|string|HolbertonClass} The converted value.
     */
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    if (hint === 'string') {
      return this._location;
    }
    return this;
  }
}
