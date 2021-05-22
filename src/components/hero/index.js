import React from 'react';
import './index.css';

export default function Hero({ children, ...rest }) {
  return (
    <div className="hero px-5 flex" {...rest}>
      {children}
    </div>
  );
}

Hero.Wrapper = function HeroWrapper({ children, ...rest }) {
  return <div className="flex flex-col m-auto" {...rest}>{children}</div>;
};

Hero.Title = function HeroTitle({ children, ...rest }) {
  return (
    <h1 className="text-center text-3xl font-bold" {...rest}>
      {children}
    </h1>
  );
};

Hero.Text = function HeroText({ children, ...rest }) {
  return (
    <p className="text-center mt-3" {...rest}>
      {children}
    </p>
  );
};
