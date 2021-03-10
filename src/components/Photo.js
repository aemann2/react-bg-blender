import React, { useState, useEffect } from 'react';
import spinner from '../images/spinner.svg';

function Photo() {
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState();

  useEffect(() => {
    const fetchPhoto = () => {
      const url = 'https://picsum.photos/800?grayscale';

      fetch(url)
        .then((response) => response.blob())
        .then((data) => {
          const imgURL = URL.createObjectURL(data);
          setPhoto(imgURL);
        });
    };

    fetchPhoto();
  }, []);

  return (
    <div className='img'>
      <div
        className='img__container'
        style={{ backgroundImage: `url(${photo})` }}
      ></div>
      <img className='img__spinner' src='' alt='' />
    </div>
  );
}

export default Photo;
