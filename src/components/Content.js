import { useState, useEffect } from 'react';
import '../styles/Content.css';
import Card from './Card';

const Content = (props) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getTenImages(score);
  }, []);

  const [score, setScore] = useState(0);

  useEffect(() => {
    getTenImages(score);
  }, [score]);

  const getTenImages = (startIndex) => {
    const images = props.data.filter((image, index) => {
      return index >= startIndex && index < startIndex + 10;
    });

    setCards(images);
  };

  const shuffleArray = () => {
    const newArr = cards
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    return newArr;
  };

  return (
    <div className="container">
      {cards.map((image) => {
        return <Card image={image} key={image.name} parentState={cards} shuffle={shuffleArray} />;
      })}
    </div>
  );
};

export default Content;
