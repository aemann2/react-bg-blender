import React from 'react';
import PropTypes from 'prop-types';

function Photobtn({ fetchPhoto }) {
  const handleClick = () => {
    fetchPhoto();
  };
  return (
    // using a fragment to avoid wrapping in an extra div
    <React.Fragment>
      <button className='selectors__new-pic' onClick={handleClick}>
        New Photo
      </button>
    </React.Fragment>
  );
}

Photobtn.propTypes = {
  fetchPhoto: PropTypes.func,
};

export default Photobtn;
