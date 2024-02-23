// @ts-check
/**
 * References a originalString argument and returns letters in reversed order.
 *
 * @param {string} originalString - The original text that will be reversed. 
 * @returns {string} A string in reverse order.
 *
 * @example
 * // Case 1: Input string is empty.
 * reverseString(); // Returns: "".
 *
 * // Case 2: Input string equals "stressed"
 * cookingStatus("stressed"); // Returns: "desserts".
 */
export const reverseString = (originalString = "") => {
  let resultString = "";
  for (let i = originalString.length - 1; i >= 0; i--) {
    resultString += originalString[i];
  }
  return resultString;
};
