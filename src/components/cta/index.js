import React from 'react';
import "./index.css";

export default function CTA({ children, ...rest }) {
  return <div className="cta mt-12" {...rest}>{children}</div>;
}

CTA.Wrapper = function CTAWrapper({ children, ...rest }) {
  return <div className="maxed flex flex-col md:flex-row md:pb-2 px-5 pb-8 text-center" {...rest}>{children}</div>;
};

CTA.Img = function CTAImg({ src, alt, ...rest }) {
  return <img className="m-auto" src={src} alt={alt} {...rest} />;
};

CTA.Title = function CTATitle({ children, ...rest }) {
  return <h3 className="text-3xl" {...rest}>{children}</h3>;
};

CTA.Text = function CTAText({ children, ...rest }) {
  return <p className="cta__text mt-2" {...rest}>{children}</p>;
};

CTA.Price = function CTAPrice({ children, ...rest }) {
  return <p className="cta__price text-xl mt-2 tracking-widest" {...rest}>{children}</p>;
};
