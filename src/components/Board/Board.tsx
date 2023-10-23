import { emptyString } from "../../constants/strings";
import { IBoard } from "../../models/board";
import styles from "./Board.module.css";

export default function Board({ bombs, visited, visitCell }: IBoard) {
  return (
    <div className={styles.board}>
      {bombs.map((arr: any[], index: number) => (
        <div key={index}>
          {arr.map((elem: any[], i: number) => (
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
              {visited[index][i] === 0
                ? null
                : bombs[index][i] === 0
                ? emptyString
                : bombs[index][i]}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
