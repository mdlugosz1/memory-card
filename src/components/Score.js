import { useState } from 'react';
import '../styles/Score.css';

const Score = (props) => {
  return (
    <div>
      <p>
        Current score: <span>{props.score}</span>
      </p>
      <p>
        Best score: <span>{props.bestScore}</span>
      </p>
    </div>
  );
};

export default Score;
