import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './index.css';

export default function CTA({ children, ...rest }) {
  const { ref, inView} = useInView({ threshold: 0.5, rootMargin:"-150px" });
  const [isIntersect, setIsIntersect] = useState(false);

    useEffect(() => {
      if(inView) setIsIntersect(true);  
    }, [inView, ref])

  return (
    <div
      ref={ref}
      className={`cta mt-12 animate__animated animate__delay-1 ${isIntersect ? "animate__fadeIn" : ""}`}
      {...rest}
    >
      {children}
    </div>
  );
}

CTA.Wrapper = function CTAWrapper({ children, ...rest }) {
  return (
    <div
      className="maxed flex flex-col md:flex-row md:pb-2 px-5 pb-8 text-center"
      {...rest}
    >
      {children}
    </div>
  );
};

CTA.Img = function CTAImg({ src, alt, ...rest }) {
  return <img className="m-auto" src={src} alt={alt} {...rest} />;
};

CTA.Title = function CTATitle({ children, ...rest }) {
  return (
    <h3 className="text-3xl" {...rest}>
      {children}
    </h3>
  );
};

CTA.Text = function CTAText({ children, ...rest }) {
  return (
    <p className="cta__text mt-2" {...rest}>
      {children}
    </p>
  );
};

CTA.Price = function CTAPrice({ children, ...rest }) {
  return (
    <p className="cta__price text-xl mt-2 tracking-widest" {...rest}>
      {children}
    </p>
  );
};
