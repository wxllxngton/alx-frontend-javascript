/**
 * Script handles the signup process by uploading a photo and creating a user.
 */

import { uploadPhoto, createUser } from './utils';

/**
 * Handles the signup process by uploading a photo and creating a user.
 *
 * @returns {Promise} A Promise that resolves when both photo upload
 * and user creation are successful.
 */
export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((res) => {
      console.log('Res: ', res);
      console.log(
        `${res[0].body} ${res[1].firstName} ${res[1].lastName}`,
      );
    })
    .catch(() => console.log('Signup system offline'));
}
