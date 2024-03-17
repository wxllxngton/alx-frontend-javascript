/**
 * Script handles responses from an API.
 */

/**
 * Handles API response and returns a handled Promise.
 *
 * @param {Promise} promise - The Promise representing the API response.
 * @returns {Promise} A Promise that resolves with a handled API response.
 */
export default function handleResponseFromAPI(promise) {
    return promise
        .then(() => ({ status: 200, body: 'success' }))
        .catch(() => new Error())
        .finally(() => console.log('Got a response from the API'));
}
