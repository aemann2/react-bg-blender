import React from 'react';

function Photobtn(props) {
  const { fetchPhoto } = props;

  const handleClick = () => {
    fetchPhoto();
  };
  return (
    <React.Fragment>
      <button className='selectors__new-pic' onClick={handleClick}>
        New Photo
      </button>
    </React.Fragment>
  );
}

export default Photobtn;
