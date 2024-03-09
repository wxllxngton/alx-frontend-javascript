/**
 * Represents the EVCar class, extending the Car class.
 * @class
 */
import Car from './10-car';

export default class EVCar extends Car {
    /**
     * Constructs an EVCar object.
     *
     * @param {string} brand - The brand of the EVCar.
     * @param {string} motor - The motor of the EVCar.
     * @param {string} color - The color of the EVCar.
     * @param {string} range - The range of the EVCar.
     */
    constructor(brand, motor, color, range) {
        super(brand, motor, color);
        this._range = range;
    }

    /**
     * Gets the range of the EVCar.
     *
     * @returns {string} The range.
     */
    get range() {
        return this._range;
    }

    /**
     * Sets the range of the EVCar.
     *
     * @param {string} value - The range to set.
     */
    set range(value) {
        if (typeof value === 'string') {
            this._range = value;
        }
    }

    /**
     * Clones the EVCar, returning an instance of Car.
     *
     * @returns {Car} The cloned Car instance.
     */
    cloneCar() {
        return new Car();
    }
}
