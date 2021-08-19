import '../styles/Card.css';
import { useState, useEffect } from 'react';
import { shuffleArray } from './utils/helpers';

const Card = (props) => {
  let [counter, setCounter] = useState(0);

  useEffect(() => {
    props.changeOrder(shuffleArray(props.cards));
  }, [counter]);

  const givePoint = () => {
    if (counter < 1) {
      setCounter(++counter);
      props.setScore(1 + props.score);
    } else {
      setCounter(0);
      props.setFinished(!props.isFinished);
    }
  };

  return (
    <div className="card">
      <img alt="" src={props.image.url} data-id={props.image.name} onClick={givePoint}></img>
      <h5>{props.image.name}</h5>
    </div>
  );
};

export default Card;
