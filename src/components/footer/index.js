import React from 'react';
import './index.css';

export default function Footer({ children, ...rest }) {
  return <footer {...rest}>{children}</footer>;
}

Footer.Wrapper = function FooterWrapper({ children, ...rest }) {
  return (
    <div
      className="maxed flex flex-wrap px-5 py-12 justify-center sm:flex-nowrap"
      {...rest}
    >
      {children}
    </div>
  );
};

Footer.ContentWrapper = function FooterContentWrapper({
  children,
  className,
  ...rest
}) {
  return (
    <div className={`footer__content-wrapper flex flex-col items-center ${className || ''}`} {...rest}>
      {children}
    </div>
  );
};

Footer.Title = function FooterTitle({ children, ...rest }) {
  return (
    <h4 className="font-bold" {...rest}>
      {children}
    </h4>
  );
};

Footer.List = function FooterList({ children, className, ...rest }) {
  return (
    <ul className={`${className || ''}`} {...rest}>
      {children}
    </ul>
  );
};

Footer.Item = function FooterItem({ children, ...rest }) {
  return <li {...rest}>{children}</li>;
};

Footer.Link = function FooterLink({ children, href, ...rest }) {
  return (
    <a href={href} className="footer__link hover:underline cursor-pointer" {...rest}>
      {children}
    </a>
  );
};
