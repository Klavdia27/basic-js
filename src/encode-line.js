const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  if (str.length === 0) return ''

  let count = 0
  let startSymbol = str[0]

  let result = ''

  const writeToResult = () => {
    if (count === 1 || count === 0) {
      result += `${startSymbol}`
    } else {
      result += `${count}${startSymbol}`
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === startSymbol) {
      count++

      if (str.length - 1 === i) {
        writeToResult()
        break
      }
    } else {
      writeToResult()
      count = 1
      startSymbol = str[i]
    }

    if (str.length - 1 === i) {
      writeToResult()
    }
  }

  return result
}

module.exports = {
  encodeLine
};
