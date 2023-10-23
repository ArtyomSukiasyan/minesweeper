import { useState } from "react";
import Board from "./components/Board/Board";
import calcOpenedSquares from "./helpers/calcOpenedSquares";
import { generateAgain, generateNewGame, title, X } from "./constants/strings";
import styles from "./App.module.css";

function App() {
  const [bombs, setBombs] = useState<(number | string)[][]>([]);
  const [visited, setVisited] = useState<number[][]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const generateBombs = (): void => {
    setIsFinished(false);

    let bombArr = Array(10)
      .fill(0)
      .map(() => Array(10).fill(0));

    for (let i = 0; i < bombArr.length; i++) {
      const bombPos = Math.floor(Math.random() * 10);
      bombArr[i][bombPos] = X;
    }

    bombArr = calcOpenedSquares(bombArr);

    setBombs(bombArr);

    const cover = Array(10)
      .fill(0)
      .map(() => Array(10).fill(0));

    setVisited(cover);
  };

  const dfsCells = (i: number, j: number): void => {
    const isCheckedSquare = visited[i][j] === 1 || bombs[i][j] === X;
    const isOutsideFromBoard =
      i < 0 || i > visited.length - 1 || j < 0 || j > visited[0].length - 1;

    if (isCheckedSquare || isOutsideFromBoard) {
      return;
    }

    visited[i][j] = 1;

    setVisited([...visited]);

    if (bombs[i][j] < 1) {
      dfsCells(i + 1, j);
      dfsCells(i - 1, j);
      dfsCells(i, j + 1);
      dfsCells(i, j - 1);
    }
  };

  const visitCell = (i: number, j: number): void => {
    if (bombs[i][j] === X || isFinished) {
      setIsFinished(true);
      alert(generateAgain);

      return;
    }

    dfsCells(i, j);

    visited[i][j] = 1;
    setVisited([...visited]);
  };

  return (
    <div className={styles.Minesweeper}>
      <div className={styles.Minesweeper_header}>
        <div className={styles.title}>{title}</div>
        <Board bombs={bombs} visited={visited} visitCell={visitCell} />
        <button className={styles.generate} onClick={generateBombs}>
          {generateNewGame}
        </button>
      </div>
    </div>
  );
}

export default App;
