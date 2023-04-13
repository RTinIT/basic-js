const { NotImplementedError } = require("../extensions/index.js");

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
  constructor(direct = true) {
    this.direct = direct;
    this.chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.charNumbers = {};
    for (let i = 0; i < this.chars.length; i++) {
      this.charNumbers[this.chars[i]] = i;
    }
  }

  encrypt(message, key) {
    if (typeof message === "undefined" || typeof key === "undefined") {
      throw new Error("Incorrect arguments!");
    }

    let m = message.split(" ").join("").toUpperCase();

    let encryptedMessage = "";
    for (let i = 0; i < m.length; i++) {
      const keyLetter = key.toUpperCase()[i % key.length];
      if (m[i].search(/[A-Z]/) != -1) {
        const encLetter =
          this.chars[
            (this.charNumbers[keyLetter] + this.charNumbers[m[i]]) %
              this.chars.length
          ];

        encryptedMessage += encLetter;
      }
    }

    const res = message.split("");

    for (let i = 0, j = 0; i < res.length; i++) {
      if (res[i].toUpperCase().search(/[A-Z]/) != -1) {
        res[i] = encryptedMessage[j];
        j++;
      } else continue;
    }

    return this.direct ? res.join("") : res.reverse().join("");
  }

  decrypt(message, key) {
    if (typeof message === "undefined" || typeof key === "undefined") {
      throw new Error("Incorrect arguments!");
    }

    let m = message.split(" ").join("").toUpperCase();

    let encryptedMessage = "";
    for (let i = 0; i < m.length; i++) {
      const keyLetter = key.toUpperCase()[i % key.length];
      if (m[i].search(/[A-Z]/) != -1) {
        const encLetter =
          this.chars[
            (this.charNumbers[m[i]] -
              this.charNumbers[keyLetter] +
              this.chars.length) %
              this.chars.length
          ];

        encryptedMessage += encLetter;
      }
    }

    const res = message.split("");

    for (let i = 0, j = 0; i < res.length; i++) {
      if (res[i].toUpperCase().search(/[A-Z]/) != -1) {
        res[i] = encryptedMessage[j];
        j++;
      } else continue;
    }

    return this.direct ? res.join("") : res.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
