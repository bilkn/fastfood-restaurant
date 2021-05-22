import React from 'react';

export default function Header({ children, rest }) {
  return <header {...rest}>{children}</header>;
}

Header.Wrapper = function HeaderWrapper({ children, className, ...rest }) {
  return (
    <div
      className={`flex justify-between px-5 py-5 pb-0 items-center ${
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
  return <nav {...rest}>{children}</nav>;
};

Header.List = function HeaderList({ children, ...rest }) {
  return <ul {...rest}>{children}</ul>;
};

Header.Item = function HeaderItem({ children, ...rest }) {
  return <li {...rest}>{children}</li>;
};

Header.Link = function HeaderLink({ children, href, ...rest }) {
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
};
