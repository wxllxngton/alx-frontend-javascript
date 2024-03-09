/**
 * Represents the SkyHighBuilding class, extending the Building class.
 * @class
 */
import Building from './5-building';

export default class SkyHighBuilding extends Building {
  /**
     * Constructs a SkyHighBuilding object.
     *
     * @param {number} sqft - The square footage of the SkyHighBuilding.
     * @param {number} floors - The floors of the SkyHighBuilding.
     * @throws {TypeError} If the provided sqft is not a number.
     */
  constructor(sqft, floors) {
    super(sqft);
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
     * Overrides the evacuationWarningMessage method to provide a custom message.
     *
     * @override
     * @returns {string} The evacuation warning message.
     */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
