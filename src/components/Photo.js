import React, { useEffect } from 'react';
import spinner from '../images/spinner.svg';

function Photo({ fetchPhoto, loading, photo }) {
  // I can't figure out the error in the next line...
  // eslint-disable-next-line
  useEffect(fetchPhoto, []);

  return (
    <div className='img'>
      <div
        className='img__container'
        style={{
          backgroundImage: loading ? `url(${spinner})` : `url(${photo})`,
        }}
      ></div>
    </div>
  );
}

export default Photo;
