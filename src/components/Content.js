import { useState, useEffect } from 'react';
import '../styles/Content.css';
import Card from './Card';

const Content = (props) => {
  const [data, setData] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

  useEffect(() => {
    getTenImages();
  }, []);

  const getTenImages = () => {
    let images = [];
    for (let i = 0; i < 10; i++) {
      images.push(props.data[i]);
    }

    setData(images);
  };

  const shuffleArray = () => {
    const newArr = data
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    return newArr;
  };

  const getCardName = (e) => {
    const name = e.target.dataset.id;
    setSelectedImages([...selectedImages, name]);
    console.log(selectedImages);
  };

  return (
    <div className="container">
      {data.map((image, index) => {
        return (
          <Card
            image={image}
            key={index}
            parentState={data}
            setState={setData}
            shuffle={shuffleArray}
            clicked={getCardName}
          />
        );
      })}
    </div>
  );
};

export default Content;
