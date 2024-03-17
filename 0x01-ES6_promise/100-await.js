/**
 * Asynchronously uploads a photo and creates a user.
 */

import { createUser, uploadPhoto } from './utils.js';

/**
 * Asynchronously uploads a photo and creates a user.
 *
 * @returns {Promise} A Promise that resolves with an object containing
 * the photo and user information.
 */
export default async function asyncUploadUser() {
    let res = {};

    try {
        const photo = await uploadPhoto();
        const user = await createUser();
        res = { photo, user };
    } catch (err) {
        res = { photo: null, user: null };
    }
    return res;
}
