import React from 'react';
import './index.css';

export default function Button({ children, className, ...rest }) {
  return (
    <button className={`button mt-4 px-3 py-2 rounded ${className || ''}`} {...rest}>
      {children}
    </button>
  );
}
