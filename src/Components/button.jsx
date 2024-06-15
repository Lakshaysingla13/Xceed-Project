import React from 'react';
import './button.css';

function Button({ ButtonName, variant, position }) {
  const positionClass = position === 'right' ? 'ml-auto' : position === 'center' ? 'mx-auto' : '';

  return (
    <button className={`btn ${variant === 'white' ? 'btn-white' : ''} ${position === 'right' ? 'btn-right' : ''} ${position === 'first' ? 'btn-first' : ''} ${position === 'second' ? 'btn-second' : ''} ${position === 'center' ? 'btn-center' : ''} ${position === 'SecB1' ? 'btn-secB1' : ''} ${position === 'SecB2' ? 'btn-secB2' : ''} `}>
      {ButtonName}
    </button>
  );
}

export default Button;