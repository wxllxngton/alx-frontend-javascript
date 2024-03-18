/**
 * Script returns a promise based on a boolean parameter
 * indicating success.
 */

/**
 * Returns a Promise with a response based on the success status.
 *
 * @param {boolean} success - A boolean indicating the success status.
 * @returns {Promise} A Promise that resolves with a success response
 * if true, otherwise rejects with an error.
 */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => (success
    ? resolve({
      status: 200,
      body: 'Success',
    })
    : reject(new Error('The fake API is not working currently'))));
}
