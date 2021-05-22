import React from 'react';

export default function Footer({ children, ...rest }) {
  return <footer {...rest}>{children}</footer>;
}

Footer.Wrapper = function FooterWrapper({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
};

Footer.ContentWrapper = function FooterContentWrapper({children, ...rest}) {
  return <div {...rest}>{children}</div>
}

Footer.Title = function FooterTitle({ children, ...rest }) {
  return <h4 {...rest}>{children}</h4>;
};

Footer.List = function FooterList({ children, ...rest }) {
  return <ul {...rest}>{children}</ul>;
};

Footer.Item = function FooterItem({ children, ...rest }) {
  return <li {...rest}>{children}</li>;
};

Footer.Link = function FooterLink({ children, href, ...rest }) {
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
};
