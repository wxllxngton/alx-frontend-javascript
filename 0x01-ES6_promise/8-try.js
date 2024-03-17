/**
 * Script divides the numerator by the denominator.
 */

/**
 * Returns the result of dividing the numerator by the denominator.
 *
 * @param {number} numerator - The numerator.
 * @param {number} denominator - The denominator.
 * @returns {number} The result of the division.
 * @throws {Error} Throws an error if the denominator is 0.
 */
export default function divideFunction(numerator, denominator) {
    if (denominator === 0) {
        throw new Error('Cannot divide by 0');
    } else {
        return numerator / denominator;
    }
}
