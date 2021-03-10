import React, { useState, useEffect } from 'react';
import spinner from '../images/spinner.svg';

function Photo() {
  const [photo, setPhoto] = useState(null);

  const fetchPhoto = () => {
    const url = 'https://picsum.photos/800?grayscale';

    fetch(url)
      .then((response) => response.blob())
      .then((data) => {
        const imgURL = URL.createObjectURL(data);
        setPhoto(imgURL);
      });
  };

  useEffect(() => {
    fetchPhoto();
  }, []);

  return (
    <div className='img'>
      <div
        className='img__container'
        style={{
          backgroundImage: photo ? `url(${photo})` : `url(${spinner})`,
        }}
      ></div>
    </div>
  );
}

export default Photo;
