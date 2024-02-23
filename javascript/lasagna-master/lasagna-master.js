/// <reference path="./global.d.ts" />
// @ts-check

/**
 * References a timer argument and returns the Lasagna's cooking status.
 *
 * @param {number|null} time - The remaining cooking time on the timer. 
 * @returns {string} A message indicating the cooking status
 *
 * @example
 * // Case 1: Timer not set || timer = null
 * cookingStatus(timer); // Returns: "You forgot to set the timer."
 *
 * // Case 2: Lasagna is done
 * cookingStatus(0); // Returns: "Lasagna is done."
 *
 * // Case 3: Lasagna is not done yet
 * cookingStatus(10); // Returns: "Not done, please wait."
 */
export function cookingStatus(timer = null) {
  if (timer === null) {
    return 'You forgot to set the timer.';
  } else if (timer == 0) {
    return 'Lasagna is done.';
  }
  return 'Not done, please wait.';
}

/**
 * Estimates preparation time based on layers array and average
 * preparation time per each layer.
 *
 * @param {string[]} Layers used to cook lasagna
 * @param {number} Average preparation time per layer
 * @returns {number} total preparation time
 *
 * @example
 * // Case 1: Layers array is empty and no preparation time given 
 * preparationTime([]); // Returns: 0
 *
 * // Case 2: Layers array is filled with data but no preparation time is given
 * preparationTime(['sauce', 'noodles', 'sauce']); 
 * // Returns: 6 (default average preparation time is used)
 *
 * // Case 3: Both layers array and average preparation time are given
 * preparationTime(['sauce', 'noodles', 'sauce'], 3);  
 * // Returns: 9 (based on parameters provided)
 */
export function preparationTime(layers = [], avgPrepTime = 2) {
  return layers.length * avgPrepTime;
}

/**
 * Computes the amounts of noodles and sauce needed based on
 * layers that will be prepared.
 *
 * @param {string[]} Layers used to cook lasagna
 * @returns {Quantity} Quantities of sauce and noodles needed to prepare lasagna
 * 
 * @example
 * // Case 1: Layers array is empty  
 * quantities([]); // Returns: 0
 *
 * // Case 2: Layers array is filled with sauce and noodles layers
 * quantities(['sauce', 'noodles', 'sauce']); 
 * // Returns: { noodles: 50, sauce: 0.4 }
 */
export function quantities(layers = []) {
  let ingredientsQuantities = { noodles: 0, sauce: 0 };
  for (let layer of layers) {
    if (layer === 'sauce') {
      ingredientsQuantities.sauce += 0.2;
    } else if (layer === 'noodles') {
      ingredientsQuantities.noodles += 50;
    }
  }
  return ingredientsQuantities;
}

/**
 * Adds a secret ingredient from friend's list - copy the last igredient
 * added to lasagna in friend's list.
 *
 * @param {string[]} Friend's ingredients list
 * @param {string[]} Ingredients list
 *
 * @example
 * // Case 1: Friend's and ours lists are not provided  
 * addSecretIngredient(); // Returns: empty list
 *
 * // Case 2: Friend's list is provided but our does not exists
 * addSecretIngredient(['sauce', 'noodles', 'sauce', 'mozarella']); 
 * // Returns: ['mozarella']
 *
 * // Case 3: Both lists contains some ingredients
 * addSecretIngredient(['sauce', 'noodles', 'sauce', 'mozarella'],
 *                     ['meat', 'sauce']); 
 * // Returns: ['meat', 'sauce',  'mozarella']
 */
export function addSecretIngredient(friendsList = [], myList = []) {
  myList.push(friendsList[friendsList.length - 1]);
}

/**
 * Scale the copy of original recipe to desire portions count and returns.
 *
 * @param {Recipe} Original receipe to scale
 * @param {number} Final portions count
 * @returns {Recipe} New scaled recipe for provided portions count
 * 
 * @example
 * const recipe = {
 *  noodles: 200,
 *  sauce: 0.5,
 *  mozzarella: 1,
 *  meat: 100,
 *};
 *
 * const recipeScaled = {
 *  noodles: 400,
 *  sauce: 1,
 *  mozzarella: 2,
 *  meat: 200,
 *};
 * // Case 1: Recipe and portions count are not provided
 * scaleRecipe(); // Returns: {} - empty recipe
 *
 * // Case 2: Full recipe is provided with no portions count
 * scaleRecipe(recipe); // Returns: Copy of recipe
 *
 * // Case 3: Full recipe is provided and scale to 4 portions
 * scaleRecipe(recipe, 4); // Returns: recipeScaled
 */
export function scaleRecipe(recipe = {}, portions = 2) {
  let scaledRecipe = { ...recipe };
  let scaleRatio = portions / 2;
  if (scaleRatio == 1) {
    return scaledRecipe;
  }
  for (let ingredient in scaledRecipe) {
    scaledRecipe[ingredient] *= scaleRatio;
  }
  return scaledRecipe;
}