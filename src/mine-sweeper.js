const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const res = [];
  //   if (matrix[1][1]) {
  //     res.push([1, 1, 1]);
  //     res.push([1, 1, 1]);
  //     res.push([1, 1, 1]);
  //   } else {
  //     res.push([0, 0, 0]);
  //     res.push([0, 0, 0]);
  //     res.push([0, 0, 0]);
  //   }
  //   for (let i = 0; i < matrix[1].length; i++) {
  //     if (matrix[i - 1][j]) {
  //       res.push();
  //     }
  //     for (let j = 0; j < matrix.length; j++) {
  //       res.push();
  //     }
  //   }
  //   return res;
}

// minesweeper([
//   [true, false, false],
//   [false, true, false],
//   [false, false, false],
// ]);

module.exports = {
  minesweeper,
};
