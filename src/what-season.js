const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
    let season = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];
    if (date === null || typeof date === 'string') {
        return 'Unable to determine the time of year!'
    } else if (Date.parse(date) === NaN ||
        date.toString === 'Invalid Date' ||
        !date instanceof Date ||
        Object.prototype.toString.call(date) != '[object Date]') {
        throw new Error("Invalid date!");
    } else {
        return season[date.getMonth()];
    }
}

module.exports = {
    getSeason
};