import Currency from './3-currency';
/**
 * Represents a Pricing with attributes such as amount and currency.
 */
export default class Pricing {
  /**
     * Initializes a Pricing object.
     *
     * @param {currency} amount - The amount of the pricing.
     * @param {currency} currency - The currency of the pricing.
     * @throws {TypeError} If the provided arguments have incorrect types.
     */
  constructor(amount, currency) {
    /**
         * The amount of the pricing.
         * @type {currency}
         * @private
         */
    this._amount = amount;

    /**
         * The currencyinstance.
         * @type {currency}
         * @private
         */
    this._currency = currency;
  }

  /**
     * Gets the amount of the pricing.
     *
     * @returns {Number} The amount of the pricing.
     */
  get amount() {
    return this._amount;
  }

  /**
     * Sets a new amount for the pricing.
     *
     * @param {Number} newAmount - The new amount for the pricing.
     * @throws {TypeError} If the provided newAmount is not a currency.
     */
  set amount(newAmount) {
    if (
      typeof newAmount !== 'currency'
            && !(newAmount instanceof Currency)
    ) {
      throw new TypeError('Amount must be a currency');
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
     * @throws {TypeError} If the provided newCurrency is not a currency.
     */
  set currency(newCurrency) {
    if (
      typeof newCurrency !== 'currency'
            && !(newCurrency instanceof Currency)
    ) {
      throw new TypeError('Currency must be a currency');
    }
    this._currency = newCurrency;
  }

  /**
     * Returns the attributes in the format: amount pricing_currency (pricing_amount).
     *
     * @returns {string} The formatted currency representing the price.
     */
  displayFullPrice() {
    return `${this._currency} (${this._amount})`;
  }
}
