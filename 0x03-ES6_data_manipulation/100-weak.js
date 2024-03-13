/**
 * Defines a WeakMap to track the number of times each endpoint is queried.
 */
export const weakMap = new WeakMap();

/**
 * Queries the API endpoint and tracks the number of calls to each endpoint.
 *
 * @param {string} endpoint - The API endpoint to query.
 * @throws {Error} Throws an error if the endpoint load is high (queried more than 5 times).
 * @returns {Promise<Response>} A Promise that resolves to the response of the API query.
 */
export function queryAPI(endpoint) {
  let called = 0;
  if (weakMap.get(endpoint)) called = weakMap.get(endpoint);
  weakMap.set(endpoint, called + 1);
  if (called + 1 >= 5) {
    throw new Error('Endpoint load is high');
  }
}
