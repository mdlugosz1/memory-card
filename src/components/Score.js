import { useState } from 'react';
import '../styles/Score.css';

const Score = (props) => {
  return (
    <div>
      <p>
        Current score: <span></span>
      </p>
      <p>
        Best score: <span></span>
      </p>
    </div>
  );
};

export default Score;
