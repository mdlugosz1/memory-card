import '../styles/Score.css';

const Score = (props) => {
  return (
    <div className="score-board">
      <p>
        Current score: <span>{props.score}</span>
      </p>
      <p>
        Best score: <span className="best">{props.bestScore}</span>
      </p>
    </div>
  );
};

export default Score;
