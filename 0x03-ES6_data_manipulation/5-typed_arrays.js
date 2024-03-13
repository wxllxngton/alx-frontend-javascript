/**
 * Creates a new ArrayBuffer with an Int8 value at a specific position.
 *
 * @param {number} length - The length of the new ArrayBuffer.
 * @param {number} position - The position at which to set the Int8 value.
 * @param {number} value - The Int8 value to set.
 * @returns {DataView} A new DataView containing the ArrayBuffer
 * with the Int8 value set at the specified position.
 * @throws {Error} If the position is outside the range of the ArrayBuffer.
 */
const createInt8TypedArray = (length, position, value) => {
  if (position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new DataView(new ArrayBuffer(length), 0, length);

  buffer.setInt8(position, value);
  return buffer;
};

export default createInt8TypedArray;
