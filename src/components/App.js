import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import { useEffect, useState } from 'react';
import { setupImages } from './utils/helpers';
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
