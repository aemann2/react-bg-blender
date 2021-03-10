import React, { useState, useEffect } from 'react';

function BlendMode() {
  const [blend, setBlend] = useState('hard-light');

  const handleChange = (e) => {
    setBlend(e.target.value);
  };

  // using useEffect so the blend variable gets set after the component updates. otherwise, the value will always be set to the previously chosen value
  useEffect(() => {
    document.documentElement.style.setProperty('--blend-mode', blend);
  });

  return (
    <div className='selectors__blend-mode'>
      <label htmlFor='blend-mode'>Blend Mode:</label>
      <select name='blend-mode' onInput={handleChange}>
        <option value='hard-light'>Hard-light</option>
        <option value='soft-light'>Soft-light</option>
        <option value='multiply'>Multiply</option>
        <option value='screen'>Screen</option>
        <option value='overlay'>Overlay</option>
        <option value='darken'>Darken</option>
        <option value='lighten'>Lighten</option>
        <option value='color-dodge'>Color-dodge</option>
        <option value='color-burn'>Color-burn</option>
        <option value='difference'>Difference</option>
        <option value='exclusion'>Exclusion</option>
        <option value='hue'>Hue</option>
        <option value='saturation'>Saturation</option>
        <option value='color'>Color</option>
        <option value='luminosity'>Luminosity</option>
        <option value='normal'>Normal (none)</option>
      </select>
    </div>
  );
}

export default BlendMode;
