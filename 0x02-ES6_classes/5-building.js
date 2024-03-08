/**
 * Script implements the Building class.
 */
/**
 * Represents a building with attributes such as square footage.
 * @class
 */
class Building {
  /**
     * Constructs a Building object.
     *
     * @param {number} sqft - The square footage of the building.
     * @throws {TypeError} If the provided sqft is not a number.
     * @throws {Error} If a subclass does not override evacuationWarningMessage.
     */
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
    this.sqft = sqft;
  }

  /**
     * Sets the square footage of the building.
     *
     * @param {number} sqft - The square footage.
     * @throws {TypeError} If the provided sqft is not a number.
     */
  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = sqft;
  }

  /**
     * Gets the square footage of the building.
     *
     * @returns {number} The square footage.
     */
  get sqft() {
    return this._sqft;
  }
}

export default Building;
