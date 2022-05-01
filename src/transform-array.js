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
function transform( arr ) {
  // throw new NotImplementedError('Not implemented');
  let newArr = [];
  if(!Array.isArray(arr)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!")
  }
  if(arr.length === 0) {
    return [];
  }
  for(let e of arr) {
    newArr.push(e)
  }

  if(arr.find(el => el === '--discard-prev') || arr.find(el => el === '--discard-next')
  || arr.find(el => el === '--double-prev') || arr.find(el => el === '--double-next')) {
    for(let i = 0; i < newArr.length; i++) {
      if(newArr[i] === '--discard-prev' && i !== 0 && typeof newArr[i-1] !== 'string') {
        newArr[i-1] = '';
      } else if(newArr[i] === '--discard-next' && i !== newArr.length - 1 && typeof newArr[i+1] !== 'string') {
        newArr[i+1] = '';
      } else if(newArr[i] === '--double-prev' && i !== 0 && typeof newArr[i-1] !== 'string') {
        newArr[i] = newArr[i-1]
      } else if(newArr[i] === '--double-next' && i !== newArr.length - 1 && typeof newArr[i+1] !== 'string') {
        newArr[i] = newArr[i+1]
      } 
    }
    return newArr.filter(e => typeof e !== 'string')
  } else {
    return arr
  }

}

module.exports = {
  transform
};
