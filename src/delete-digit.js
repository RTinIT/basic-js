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
function deleteDigit( n ) {
  // throw new NotImplementedError('Not implemented');
  n = n.toString().split('').map(e => e = +e)
  if (n.length > 2) {
    for(let i = 0; i < n.length; i++){
      if (n[i] < n[i+1]) {
        n[i] = ''
        break
      }
    }
  } else {
    if(n[0] > n[1]) {
      return +n[0]
    }
  }
  n = n.filter(e => e !== '').map(e => e.toString()).join('')
  return +n
}

module.exports = {
  deleteDigit
};
