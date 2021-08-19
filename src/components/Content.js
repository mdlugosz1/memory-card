import { useState, useEffect } from 'react';
import { getTenImages } from './utils/helpers';
import '../styles/Content.css';
import Message from './Message';
import Card from './Card';

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
      setCards(nextCardSet);
      console.log('NAJS');
    }
    console.log(score);
  }, [score]);

  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setScore(0);
    setCards(startCardSet);
  }, [finished]);

  return (
    <div className="container">
      {finished && <Message score={score} setFinished={setFinished} />}
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
          />
        );
      })}
    </div>
  );
};

export default Content;
