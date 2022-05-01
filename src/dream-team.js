const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members ) {
  // throw new NotImplementedError('Not implemented');
  if(Array.isArray(members)) {
    let res = members.filter(e => typeof e === 'string');
    res = res.map(e => e = e.trim().charAt(0).toUpperCase())
    for (let i = 0; i < res.length; i++){
      for (let j = 0; j < res.length; j++) {
        if(res[i] < res[j]) {
            [res[i], res[j]] = [res[j], res[i]]
        }
      } 
    }
    return res.join('');
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam
};
