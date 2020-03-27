import React from 'react';
import './index.css';

export default function Block({ row, index, number, handleClick }) {
  return (
    <div
      onClick={() => {
        handleClick(index, row);
      }}
      className="block"
    >
      <span>{number}</span>
    </div>
  );
}
