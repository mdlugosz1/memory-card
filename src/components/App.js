import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import { useEffect, useState } from 'react';
import '../styles/App.css';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    (async () => {
      const getData = await fetch('https://api.gwent.one/?key=data&response=json')
        .then((value) => value.json())
        .then((value) => setupImages(value.response));

      setImages(getData);
    })();
  }, []);

  const setupImages = (img) => {
    const imagesArray = [];
    const randomNumber = Math.round(Math.random() * 1048);

    for (let i = randomNumber; i < randomNumber + 100; i++) {
      const image = {
        url: `https://gwent.one/image/gwent/assets/card/art/medium/${img[i].id.art}.jpg`,
        name: img[i].name,
      };
      imagesArray.push(image);
    }

    return imagesArray;
  };

  if (images.length === 0)
    return (
      <div className="loading">
        <i className="fas fa-spinner"></i>
        <p>Loading...</p>
      </div>
    );

  return (
    <div>
      <Header />
      <Content data={images} />
      <Footer />
    </div>
  );
}

export default App;
