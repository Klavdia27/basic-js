const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let ones = []

  while (arr.includes(-1)) {
    ones.push(arr.indexOf(-1))
    arr[arr.indexOf(-1)] = null
  }

  let array = arr.toString()
                .replaceAll('-1', '')
                .split(',')
                .sort((a, b) => a - b)
                .filter(i => i)

  ones.forEach(item => {
    array.splice(item, 0, -1)
  })

  return array.map(i => Number(i))
}

module.exports = {
  sortByHeight
};
