/**
 * Represents the Car class.
 */
export default class Car {
    /**
     * Constructs a Car object.
     *
     * @param {string} brand - The brand of the car.
     * @param {string} motor - The motor type of the car.
     * @param {string} color - The color of the car.
     */
    constructor(brand, motor, color) {
        this.brand = brand;
        this.motor = motor;
        this.color = color;
    }

    /**
     * Gets the brand of the car.
     *
     * @returns {string} The brand.
     */
    get brand() {
        return this._brand;
    }

    /**
     * Sets the brand of the car.
     *
     * @param {string} value - The brand to set.
     */
    set brand(value) {
        this._brand = value;
    }

    /**
     * Gets the motor type of the car.
     *
     * @returns {string} The motor type.
     */
    get motor() {
        return this._motor;
    }

    /**
     * Sets the motor type of the car.
     *
     * @param {string} value - The motor type to set.
     */
    set motor(value) {
        this._motor = value;
    }

    /**
     * Gets the color of the car.
     *
     * @returns {string} The color.
     */
    get color() {
        return this._color;
    }

    /**
     * Sets the color of the car.
     *
     * @param {string} value - The color to set.
     */
    set color(value) {
        this._color = value;
    }

    /**
     * Gets the Symbol.species property for cloning.
     *
     * @returns {Function} The Symbol.species property.
     */
    static get [Symbol.species]() {
        return this;
    }

    /**
     * Clones the car using the Symbol.species property.
     *
     * @returns {Car} The cloned car instance.
     */
    cloneCar() {
        const Species = this.constructor[Symbol.species];
        return new Species();
    }
}
