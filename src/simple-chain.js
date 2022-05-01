const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  
  getLength() {
    
  },
  addLink(value) {
    let chainString = '';
    
  },
  removeLink(position) {
    if (this.chain[position] && typeof position === 'number' && position != 0) {
      this.chain = [...this.chain.slice(0, position -1), ...this.chain.slice(position)];
      return chainMaker;
    } else {
      throw new Error (`You can't remove incorrect link!`);
    }    
  },
  reverseChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
