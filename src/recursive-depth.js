const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    constructor() {
        this.depth = 0;
        this.result = 0;
    }
    calculateDepth(arr) {
        arr.forEach(element => {
            if (Array.isArray(element)) {
                this.result++;
                if (this.result > this.depth) {
                    this.depth = this.result;
                }
                this.calculateDepth(element);
            }
            this.result = 0;
        })

        return this.depth + 1;
    }
}

const depthCalc = new DepthCalculator();

module.exports = {
    DepthCalculator
};