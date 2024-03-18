/**
 * Script imitates a Load Balancer.
 */

/**
 * Returns the first resolved promise between China and US downloads.
 *
 * @param {Promise} chinaDownload - The Promise representing the download from China.
 * @param {Promise} USDownload - The Promise representing the download from the US.
 * @returns {Promise} A Promise that resolves with the first completed download.
 */
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
