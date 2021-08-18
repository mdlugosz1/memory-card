import '../styles/Card.css';
import { useState, useEffect } from 'react';

const Card = (props) => {
  let [counter, setCounter] = useState(0);

  useEffect(() => {
    props.setState(props.shuffle());
  }, [counter]);

  const givePoint = () => {
    setCounter(++counter);
  };

  return (
    <div className="card">
      <img alt="" src={props.image.url} data-id={props.image.name} onClick={givePoint}></img>
      <h5>{props.image.name}</h5>
    </div>
  );
};

export default Card;
