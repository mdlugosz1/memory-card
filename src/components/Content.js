import { useState, useEffect } from 'react';
import { getTenImages } from './utils/helpers';
import '../styles/Content.css';
import Message from './Message';
import Card from './Card';
import Score from './Score';

const Content = (props) => {
  const [cards, setCards] = useState([]);
  const startCardSet = getTenImages(0, props.data);

  useEffect(() => {
    setCards(startCardSet);
  }, []);

  const [score, setScore] = useState(0);

  useEffect(() => {
    if (score !== 0 && score % 10 === 0) {
      const nextCardSet = getTenImages(score, props.data);
      setChosenCards([]);
      setCards(nextCardSet);
    }
  }, [score]);

  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  }, [score]);

  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (finished) {
      setChosenCards([]);
      setCards(startCardSet);
    } else {
      setScore(0);
    }
  }, [finished]);

  const [chosenCards, setChosenCards] = useState([]);

  return (
    <section className="content">
      <div className="container">
        {finished && <Message score={score} setFinished={setFinished} />}
        <Score score={score} bestScore={bestScore} />
        {cards.map((image) => {
          return (
            <Card
              image={image}
              key={image.name}
              cards={cards}
              changeOrder={setCards}
              score={score}
              setScore={setScore}
              isFinished={finished}
              setFinished={setFinished}
              chosenCards={chosenCards}
              setChosenCards={setChosenCards}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Content;
