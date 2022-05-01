const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

    // constructor(VigenereCipheringMachine) {

    // }


    encrypt(message, key) {
        if (message === null || key === null) {
            throw new Error('Incorrect arguments!');
        }
        let kf = Math.ceil(message.length / key.length);
        key = key.repeat(kf);

        let codeA = 'A'.charCodeAt(0);
        let alphabetLength = 26;

        let result = [];

        for (let i = 0; i < message.length; i++) {
            if (message[i] === / |,|.|\?|!|/gm) {
                result.push(message[i]);
            } else {
                let letterIndex = message.charCodeAt(i) - codeA;
                let shift = key.charCodeAt(i) - codeA;

                result.push(String.fromCharCode(codeA + (letterIndex + shift) % alphabetLength));
            }
        }
        return result.join('').toUpperCase;
    }


    decrypt(message, key) {
        if (message === null || key === null) {
            throw new Error('Incorrect arguments!');
        }

        let kf = Math.ceil(message.length / key.length);
        key = key.repeat(kf);

        let codeA = 'A'.charCodeAt(0);
        let alphabetLength = 26;

        let result = [];

        for (let i = 0; i < message.length; i++) {
            if (message[i] === / |,|.|\?|!|/gm) {
                result.push(message[i]);
            } else {
                let letterIndex = message.charCodeAt(i) - codeA;
                let shift = key.charCodeAt(i) - codeA;

                result.push(String.fromCharCode(codeA + (letterIndex - shift + alphabetLength) % alphabetLength));
            }
        }
        return result.join('').toUpperCase;
    }
}

module.exports = {
    VigenereCipheringMachine
};