import React from 'react';

export default function Hero({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
}

Hero.Wrapper = function HeroWrapper({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
};

Hero.Title = function HeroTitle({ children, ...rest }) {
  return <h1 {...rest}>{children}</h1>;
};

Hero.Text = function HeroText({ children, ...rest }) {
  return <p {...rest}>{children}</p>;
};
