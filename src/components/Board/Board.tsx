import { emptyString } from "../../constants/strings";
import { IBoard } from "../../models/board";
import styles from "./Board.module.css";

export default function Board({ bombs, visited, visitCell }: IBoard) {
  return (
    <div className={styles.board}>
      {bombs.map((arr: (number | string)[], index: number) => (
        <div key={index}>
          {arr.map((_: number | string, i: number) => (
            <span
              key={i}
              onClick={() => visitCell(index, i)}
              className={`${styles.square}
                ${
                  visited[index][i] === 0
                    ? styles.buttonStyle
                    : styles.visitStyle
                }`}
            >
              {getSquareValue(visited[index][i], bombs[index][i])}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

function getSquareValue(visited: string | number, bombs: string | number) {
  return visited === 0 ? null : bombs === 0 ? emptyString : bombs;
}
