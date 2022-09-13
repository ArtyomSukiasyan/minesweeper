import { IBombArr } from "./bombArr";

export interface IBoard {
  bombs: IBombArr;
  visited: IBombArr;
  visitCell: Function;
}
