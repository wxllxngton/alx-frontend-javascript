/**
 * Creates and returns an array to track the execution of a math function.
 *
 * @param {Function} mathFunction - The math function to execute.
 * @returns {Array} An array containing the results of the math function execution and
 * error messages, if any, along with a message indicating that the guardrail was processed.
 */
export default function guardrail(mathFunction) {
  const queue = [];

  try {
    queue.push(mathFunction());
  } catch (error) {
    queue.push(`Error: ${String(error.message)}`);
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
