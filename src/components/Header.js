import React from 'react';
import blender from '../images/blender.svg';

function Header() {
  return (
    <header className='header'>
      <div className='header--wrapper'>
        <img src={blender} alt='' className='header__img' />
        <h1 className='header__heading'>
          Background <span className='header--indent'>Blender</span>
        </h1>
      </div>
    </header>
  );
}

export default Header;
