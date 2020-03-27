import React, { useState } from 'react';
import defaultState from '../../constants/board';
import Block from '../Block';

import './index.css';

export default function Board() {
  const [blocks, setBlock] = useState(defaultState);

  const handleClick = (index, row) => {
    let emptySpace;
    blocks.forEach((v, i) => {
      return v.forEach((block, j) => {
        if (!block) {
          emptySpace = [i, j];
        }
      });
    });

    const blockYouCanMove = [
      [emptySpace[0], emptySpace[1] - 1],
      [emptySpace[0], emptySpace[1] + 1],
      [emptySpace[0] - 1, emptySpace[1]],
      [emptySpace[0] + 1, emptySpace[1]],
    ];

    let canMove = false;

    blockYouCanMove.forEach(rule => {
      if (row === rule[0] && index === rule[1]) {
        canMove = true;
      }
    });

    if (canMove) {
      const nextBlocks = [...blocks];

      const blockToMove = nextBlocks[row][index];

      nextBlocks[row][index] = null;

      nextBlocks[emptySpace[0]][emptySpace[1]] = blockToMove;

      console.log(nextBlocks);
      setBlock(nextBlocks);
    } else {
      alert("You can't move this block");
    }
  };
  const isBlockAdjacent = (row, index) => {};
  return (
    <div className="board">
      {blocks.map((v, i) =>
        v.map((block, j) => (
          <Block key={block} handleClick={handleClick} number={block} row={i} index={j} />
        )),
      )}
    </div>
  );
}
