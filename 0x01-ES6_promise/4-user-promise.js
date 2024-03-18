/**
 * Script returns a resolved promise with this object.
 */

/**
 * Returns a resolved promise with this object:
 *
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @returns {Promise} A resolved promise.
 */

export default function signUpUser(firstName, lastName) {
  return new Promise((resolves) => {
    resolves({
      firstName,
      lastName,
    });
  });
}
