import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import { useEffect, useState } from 'react';
import { setupImages } from './utils/helpers';
import cardback from '../images/cardback.png';
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

  if (images.length === 0)
    return (
      <div className="loading">
        <img alt="cardback" src={cardback} className="loading-image"></img>
        <p>Loading...</p>
      </div>
    );

  return (
    <div className="game">
      <Header />
      <Content data={images} />
      <Footer />
    </div>
  );
}

export default App;
