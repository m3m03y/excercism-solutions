// @ts-check

const NEEDS_LICENSE_VEHICLES = ['car', 'truck'];
const BETTER_CHOICE_TEXT = " is clearly the better choice.";

/**
 * Determines whether or not you need a license to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  for (const needsLicenseVehicle of NEEDS_LICENSE_VEHICLES) {
    if (needsLicenseVehicle == kind) {
      return true;
    }
  }
  return false;
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  if (option1 <= option2) {
    return option1 + BETTER_CHOICE_TEXT;
  }
  return option2 + BETTER_CHOICE_TEXT;
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  const usedTimePrice = age < 3 ? 0.8 : age > 10 ? 0.5 : 0.7;
  return usedTimePrice * originalPrice;
}
