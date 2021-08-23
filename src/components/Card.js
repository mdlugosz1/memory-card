import '../styles/Card.css';
import { shuffleArray } from './utils/helpers';

const Card = (props) => {
  const play = (e) => {
    const name = e.target.dataset.id;

    if (props.chosenCards.includes(name)) {
      props.setFinished(!props.finished);
    } else {
      props.changeOrder(shuffleArray(props.cards));
      props.setChosenCards([...props.chosenCards, name]);
      props.setScore(props.score + 1);
    }
  };

  return (
    <div className="card">
      <img alt="" src={props.image.url} data-id={props.image.name} onClick={play}></img>
      <h5>{props.image.name}</h5>
    </div>
  );
};

export default Card;
