const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const chunks = [];
  let i = 0;
  let j = 1;
  while (j < str.length) {
    if (str[i] !== str[j]) {
      const chunk = str.slice(i, j);
      i += chunk.length;
      j = i + 1;
      chunks.push(chunk);
    } else {
      j++;
    }
    if (j >= str.length) {
      chunks.push(str.slice(i, j));
    }
  }

  const result = [];
  for (let i = 0; i < chunks.length; i++) {
    if (chunks[i].length !== 1) {
      result.push(chunks[i].length, chunks[i][0]);
    } else {
      result.push(chunks[i][0]);
    }
  }
  return result.join("");
}

module.exports = {
  encodeLine,
};
