const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    if (options.separator === undefined) {
        options.separator = '+';
    }
    if (options.additionSeparator === undefined) {
        options.additionSeparator = '|';
    }
    const repeatFunction = (separator, string = '', repeatTimes = 1) => {
        let resultArray = [];
        for (let i = 0; i < repeatTimes; i++) {
            resultArray.push(String(string));
        }
        return resultArray.join(separator);
    }
    const addition = repeatFunction(options.additionSeparator, options.addition, options.additionRepeatTimes);
    options.separator = addition + options.separator;

    return repeatFunction(options.separator, str, options.repeatTimes) + addition;
}

module.exports = {
    repeater
};