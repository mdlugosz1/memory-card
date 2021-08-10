import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import { useEffect, useState } from 'react';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    (async () => {
      const getData = await fetch('https://api.gwent.one/?key=data&response=json');
      const data = await getData.json();
      const images = setupImages(data.response);
      setImages(images);
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

  console.log(images);
  return (
    <div>
      <Header />
      <Content data={images} />
      <Footer />
    </div>
  );
}

export default App;
