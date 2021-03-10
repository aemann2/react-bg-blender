import React from 'react';
import blender from '../images/blender.svg';

function Header() {
  return (
    <header className='header'>
      <img src={blender} alt='' className='header__img' />
      <h1 className='header__heading'>
        Background <span className='header--indent'>Blender</span>
      </h1>
    </header>
  );
}

export default Header;
