/**
 * Script handles user signup and photo upload for profile creation.
 */

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * Handles user signup and photo upload for profile creation.
 *
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @param {string} fileName - The name of the file to upload.
 * @returns {Promise} A Promise that resolves with an array of objects
 * representing the status of user signup and photo upload.
 */
export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((res) => res.map((o) => ({
    status: o.status,
    value: o.status === 'fulfilled' ? o.value : String(o.reason),
  })));
}
