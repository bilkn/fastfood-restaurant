import React from 'react';
import "./index.css";

export default function Header({ children, rest }) {
  return <header {...rest}>{children}</header>;
}

Header.Wrapper = function HeaderWrapper({ children, className, ...rest }) {
  return (
    <div
      className={`maxed flex justify-between px-5 py-5 pb-0 items-center ${
        className || ''
      }`}
      {...rest}
    >
      {children}
    </div>
  );
};

Header.Logo = function HeaderLogo({ src, alt, ...rest }) {
  return <img src={src} alt={alt} {...rest} />;
};

Header.Nav = function HeaderNav({ children, ...rest }) {
  return <nav className="header__nav" {...rest}>{children}</nav>;
};

Header.List = function HeaderList({ children, ...rest }) {
  return <ul className="header__list hidden md:flex space-x-6 m-auto" {...rest}>{children}</ul>;
};

Header.Item = function HeaderItem({className, children, ...rest }) {
  return (
    <li {...rest} className={`header__item animate__animated animate__fadeInDown ${className || ""}`}>
      {children}
    </li>
  );
};

Header.Link = function HeaderLink({ children, href, ...rest }) {
  return (
    <a
      href={href}
      className="hover:text-white focus:text-white transition duration-50"
      {...rest}
    >
      {children}
    </a>
  );
};
