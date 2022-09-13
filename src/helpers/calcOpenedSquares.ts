import { X } from "../constants/strings";
import { IBombArr } from "../models/bombArr";

export default function calcOpenedSquares(bombArr: IBombArr): IBombArr {
  for (let i = 0; i < bombArr.length; i++) {
    for (let j = 0; j < bombArr[i].length; j++) {
      if (bombArr[i][j] !== X) {
        let sum = 0;

        if (i > 0 && bombArr[i - 1][j] === X) {
          sum++;
        }

        if (i < bombArr.length - 1 && bombArr[i + 1][j] === X) {
          sum++;
        }

        if (j < bombArr.length - 1 && bombArr[i][j + 1] === X) {
          sum++;
        }

        if (j > 0 && bombArr[i][j - 1] === X) {
          sum++;
        }

        if (i < bombArr.length - 1 && j > 0 && bombArr[i + 1][j - 1] === X) {
          sum++;
        }

        if (
          i < bombArr.length - 1 &&
          j < bombArr.length - 1 &&
          bombArr[i + 1][j + 1] === X
        ) {
          sum++;
        }

        if (i > 0 && j > 0 && bombArr[i - 1][j - 1] === X) {
          sum++;
        }

        if (i > 0 && j < bombArr.length - 1 && bombArr[i - 1][j + 1] === X) {
          sum++;
        }

        bombArr[i][j] = sum;
      }
    }
  }

  return bombArr;
}
