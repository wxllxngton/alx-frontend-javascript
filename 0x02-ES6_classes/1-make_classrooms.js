/**
 * This script initializes and returns 3 ClassRoom objects.
 */
import ClassRoom from './0-classroom.js';

/**
 * Initializes and returns an array containing three ClassRoom objects.
 *
 * @returns {Array} Array containing three initialized ClassRoom objects.
 */
export default function initializeRooms() {
    return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(24)];
}
