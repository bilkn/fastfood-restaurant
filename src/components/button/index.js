import React from 'react';

export default function Button({ children, ...rest }) {
  return <button className="" {...rest}>{children}</button>;
}
