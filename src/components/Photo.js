import React, { useEffect } from 'react';
import spinner from '../images/spinner.svg';

function Photo(props) {
  useEffect(() => {
    props.fetchPhoto();
  }, []);

  return (
    <div className='img'>
      <div
        className='img__container'
        style={{
          backgroundImage: props.photo
            ? `url(${props.photo})`
            : `url(${spinner})`,
        }}
      ></div>
    </div>
  );
}

export default Photo;
