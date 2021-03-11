import React from 'react';

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

export default Photobtn;
