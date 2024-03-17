/**
 * Script returns a rejected promise for photo upload.
 */

/**
 * Returns a Promise that rejects with an error message.
 *
 * @param {string} filename - The name of the file.
 * @returns {Promise} A Promise that rejects with an error indicating
 * the file cannot be processed.
 */

export default function uploadPhoto(filename) {
    return Promise.reject(new Error(`${filename} cannot be processed`));
}
