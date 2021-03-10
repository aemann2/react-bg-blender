import React, { useEffect } from 'react';
import spinner from '../images/spinner.svg';

function Photo(props) {
  // eslint-disable-next-line
  useEffect(props.fetchPhoto, []);

  return (
    <div className='img'>
      <div
        className='img__container'
        style={{
          backgroundImage: props.loading
            ? `url(${spinner})`
            : `url(${props.photo})`,
        }}
      ></div>
    </div>
  );
}

export default Photo;
