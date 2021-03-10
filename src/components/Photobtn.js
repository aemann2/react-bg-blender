import React from 'react';

function Photobtn(props) {
  return (
    <React.Fragment>
      <button className='selectors__new-pic' onClick={props.fetchPhoto}>
        New Photo
      </button>
    </React.Fragment>
  );
}

export default Photobtn;
