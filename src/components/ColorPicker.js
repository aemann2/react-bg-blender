import React, { useState } from 'react';

function ColorPicker() {
  const [color, setColor] = useState(null);

  const handleChange = (e) => {
    setColor(e.target.value);
    document.documentElement.style.setProperty('--color', color);
  };

  return (
    <div className='selectors__picker'>
      <label htmlFor='color-picker'>Color:</label>
      <input
        type='color'
        className='selectors__picker__bar'
        id='color-picker'
        name='color-picker'
        value={color ? color : '#ff0000'}
        onChange={handleChange}
      />
    </div>
  );
}

export default ColorPicker;
