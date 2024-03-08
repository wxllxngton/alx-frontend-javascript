/**
 * Represents the SkyHighBuilding class, extending the Building class.
 * @class
 */
import Building from './5-building';

class SkyHighBuilding extends Building {
  /**
     * Constructs a SkyHighBuilding object.
     *
     * @param {number} sqft - The square footage of the skyHighBuilding.
     * @param {number} floors - The floors of the skyHighBuilding.
     * @throws {TypeError} If the provided sqft is not a number.
     */
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  /**
     * Sets the floors of the SkyHighBuilding.
     *
     * @param {number} floors - The floors.
     * @throws {TypeError} If the provided floors is not a number.
     */
  set floors(floors) {
    if (typeof floors !== 'number') {
      throw new TypeError('Floors must be a number');
    }
    this._floors = floors;
  }

  /**
     * Gets the floors of the SkyHighBuilding.
     *
     * @returns {number} The floors.
     */
  get floors() {
    return this._floors;
  }

  /**
     * Provides an evacuation warning message for the SkyHighBuilding.
     *
     * @override
     * @returns {string} The evacuation warning message.
     */
  evacuationWarningMessage() {
    return `Evacuate slowly from the ${this._floors} floors of the SkyHighBuilding`;
  }
}

export default SkyHighBuilding;
