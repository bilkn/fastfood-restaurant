import React from 'react';
import './index.css';

export default function Button({ children, className, ...rest }) {
  return (
    <button className={`transition-background-color duration-50 button mt-2 px-3 py-2 rounded cursor-pointer ${className || ''}`} {...rest}>
      {children}
    </button>
  );
}
