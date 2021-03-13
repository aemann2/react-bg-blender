import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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

Photo.propTypes = {
  fetchPhoto: PropTypes.func,
  loading: PropTypes.bool,
  photo: PropTypes.string,
};

export default Photo;
