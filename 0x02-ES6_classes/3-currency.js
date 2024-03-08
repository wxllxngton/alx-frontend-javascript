/**
 * Represents a Currency with attributes such as code and name.
 */
export default class Currency {
    /**
     * Initializes a Currency object.
     *
     * @param {string} code - The code of the currency.
     * @param {string} name - The name of the currency.
     * @throws {TypeError} If the provided arguments have incorrect types.
     */
    constructor(code, name) {
        /**
         * The code of the currency.
         * @type {string}
         * @private
         */
        this._code = code;

        /**
         * The name of the currency.
         * @type {string}
         * @private
         */
        this._name = name;
    }

    /**
     * Gets the code of the currency.
     *
     * @returns {string} The code of the currency.
     */
    get code() {
        return this._code;
    }

    /**
     * Sets a new code for the currency.
     *
     * @param {string} newCode - The new code for the currency.
     * @throws {TypeError} If the provided newCode is not a string.
     */
    set code(newCode) {
        if (typeof newCode !== 'string' && !(newCode instanceof String)) {
            throw new TypeError('Code must be a string');
        }
        this._code = newCode;
    }

    /**
     * Gets the name of the currency.
     *
     * @returns {string} The name of the currency.
     */
    get name() {
        return this._name;
    }

    /**
     * Sets a new name for the currency.
     *
     * @param {string} newName - The new name for the currency.
     * @throws {TypeError} If the provided newName is not a string.
     */
    set name(newName) {
        if (typeof newName !== 'string' && !(newName instanceof String)) {
            throw new TypeError('Name must be a string');
        }
        this._name = newName;
    }

    /**
     * Returns the attributes in the format: name (code).
     *
     * @returns {string} The formatted string representing the currency.
     */
    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }
}
