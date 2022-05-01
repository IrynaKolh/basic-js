const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    let resultArray = [];

    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === `--discard-next` || arr[i] === `--discard-prev` || arr[i] === `--double-next` || arr[i] === `--double-prev`) {
                if (arr[i] === `--discard-next`) {
                    if (typeof arr[i + 1] === 'number') {
                        i = i + 2;
                    }
                } else if (arr[i] === `--discard-prev`) {
                    if (typeof arr[i - 1] === 'number') {
                        resultArray.pop();
                    }
                } else if (arr[i] === `--double-next`) {
                    if (typeof arr[i + 1] === 'number') {
                        resultArray.push(arr[i + 1]);
                    }
                } else {
                    if (typeof arr[i - 1] === 'number') {
                        resultArray.push(arr[i - 1]);
                    }
                }
            } else {
                resultArray.push(arr[i]);
            }

        }
        return resultArray;
    } else {
        throw new Error(`'arr' parameter must be an instance of the Array!`);
    }

}

module.exports = {
    transform
};