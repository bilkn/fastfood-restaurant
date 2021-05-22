import React from 'react';
import "./index.css";

export default function Background({ children, ...rest }) {
  return <div className="background" {...rest}>{children}</div>;
}
