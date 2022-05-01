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
    let arrayFromStr = str.split('');
    let result = [];
    for (let i = 0; i < arrayFromStr.length; i++) {
        if (arrayFromStr[i] !== arrayFromStr[i + 1]) {
            result.push(arrayFromStr[i]);
        } else {
            let count = 1;
            count++;
            result.push(count);
        }
    }
    return result.join('');
}


module.exports = {
    encodeLine
};