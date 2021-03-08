import React from 'react';
import blender from '../images/blender.svg';

function Header() {
  return (
    <header class='header'>
      <img src={blender} alt='' class='header__img' />
      <h1 class='header__heading'>
        Background <span class='header--indent'>Blender</span>
      </h1>
    </header>
  );
}

export default Header;
