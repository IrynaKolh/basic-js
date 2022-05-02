const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    chain: [],

    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        if (value === '') {
            this.chain.push(' ');
        } else {
            this.chain.push(value);
        }
        return this;
    },
    removeLink(position) {
        if (typeof this.chain[position] === 'undefined' || typeof position !== 'number') {
            throw new Error(`You can't remove incorrect link!`);
        } else {
            this.chain.splice(position - 1, 1);
            return this;
        }

    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        let chainStr = '';
        chainStr = '( ' + this.chain.join(' )~~( ') + ' )';
        this.chain = [];
        return chainStr;
    }
};

module.exports = {
    chainMaker
};