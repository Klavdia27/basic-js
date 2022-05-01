const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  const numbers = []

  for (let i = 0; i < n.toString().length; i++) {
    const array = Array.from(n.toString())
    array.splice(i, 1)
    numbers.push(array)
  }

  return Math.max(...numbers.map(item => Number(item.join(''))))
}

module.exports = {
  deleteDigit
};
