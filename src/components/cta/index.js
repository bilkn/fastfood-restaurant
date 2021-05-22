import React from 'react';

export default function CTA({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
}

CTA.Wrapper = function CTAWrapper({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
};

CTA.Img = function CTAImg({ src, alt, ...rest }) {
  return <img src={src} alt={alt} {...rest} />;
};

CTA.Title = function CTATitle({ children, ...rest }) {
  return <h3 {...rest}>{children}</h3>;
};

CTA.Text = function CTAText({ children, ...rest }) {
  return <p {...rest}>{children}</p>;
};

CTA.Price = function CTAPrice({ children, ...rest }) {
  return <p {...rest}>{children}</p>;
};
