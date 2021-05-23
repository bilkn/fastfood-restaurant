import React from 'react';
import './index.css';

export default function Testimonial({ children, ...rest }) {
  return (
    <div className="px-5 pb-12" {...rest}>
      {children}
    </div>
  );
}

Testimonial.Wrapper = function TestimonialWrapper({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
};

Testimonial.ContentWrapper = function TestimonialContentWrapper({
  children,
  ...rest
}) {
  return (
    <div
      className="flex flex-col items-center justify-center text-center"
      {...rest}
    >
      {children}
    </div>
  );
};

Testimonial.Text = function TestimonialText({ children, ...rest }) {
  return (
    <p className="testimonial__text mt-6" {...rest}>
      {children}
    </p>
  );
};

Testimonial.Img = function TestimonialImg({ className, src, alt, ...rest }) {
  return (
    <img
      className={`testimonial__img ${className || ''}`}
      src={src}
      alt={alt}
      {...rest}
    />
  );
};
