/**
 * Script implements the Pricing class.
 */
import Currency from './3-currency';

/**
 * Represents a pricing with attributes such as amount and currency.
 */
export default class Pricing {
  /**
     * Initializes a Pricing object.
     *
     * @param {number} amount - The amount of the pricing.
     * @param {Currency} currency - The currency of the pricing.
     * @throws {TypeError} If the provided arguments have incorrect types.
     */
  constructor(amount, currency) {
    /**
         * The amount of the pricing.
         * @type {number}
         * @private
         */
    this._amount = amount;

    /**
         * The currency instance.
         * @type {Currency}
         * @private
         */
    this._currency = currency;
  }

  /**
     * Gets the amount of the pricing.
     *
     * @returns {number} The amount of the pricing.
     */
  get amount() {
    return this._amount;
  }

  /**
     * Sets a new amount for the pricing.
     *
     * @param {number} newAmount - The new amount for the pricing.
     * @throws {TypeError} If the provided newAmount is not a number.
     */
  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = newAmount;
  }

  /**
     * Gets the currency of the pricing.
     *
     * @returns {Currency} The currency of the pricing.
     */
  get currency() {
    return this._currency;
  }

  /**
     * Sets a new currency for the pricing.
     *
     * @param {Currency} newCurrency - The new currency for the pricing.
     * @throws {TypeError} If the provided newCurrency is not an instance of Currency.
     */
  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._currency = newCurrency;
  }

  /**
     * Returns the attributes in the format: amount pricing_currency (pricing_amount).
     *
     * @returns {string} The formatted currency representing the price.
     */
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  /**
     * Returns amount multiplied by the conversion rate.
     *
     * @param {number} amount - The amount.
     * @param {number} conversionRate - The conversion rate.
     * @returns {number} The converted amount.
     * @throws {TypeError} If the provided arguments have incorrect types.
     */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError(
        'Both amount and conversionRate must be numbers',
      );
    }

    return amount * conversionRate;
  }
}
