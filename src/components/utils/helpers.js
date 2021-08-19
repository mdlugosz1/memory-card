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

const getTenImages = (startIndex, imgArr) => {
  const images = imgArr.filter((image, index) => {
    return index >= startIndex && index < startIndex + 10;
  });

  return images;
};

const shuffleArray = (images) => {
  const newArr = images
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return newArr;
};

export { getTenImages, shuffleArray, setupImages };
