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
    let result = 0;
    let arrayDigits = [];
    while (n) {
        arrayDigits.push(n % 10);
        n = Math.floor(n / 10);
    }
    for (let i = 0; i < arrayDigits.length; i++) {
        let count = 0;
        for (let j = arrayDigits.length - 1; j >= 0; j--) {
            if (j !== i) {
                count = count * 10 + arrayDigits[j];
            }
        }
        result = Math.max(count, result);
    }
    return result;
}

module.exports = {
    deleteDigit
};