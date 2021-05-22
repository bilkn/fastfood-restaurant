import React from 'react';
import './index.css';

export default function Button({ children, className, ...rest }) {
  return (
    <button className={`button px-3 py-2 rounded font-semibold ${className || ''}`} {...rest}>
      {children}
    </button>
  );
}
