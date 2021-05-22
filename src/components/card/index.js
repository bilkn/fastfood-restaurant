import React from 'react';

export default function Card({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
}

Card.Content = function CardContent({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
};

Card.List = function CardList({ children, ...rest }) {
  return <ul {...rest}>{children}</ul>;
};

Card.Item = function CardItem({ children, ...rest }) {
  return <li {...rest}>{children}</li>;
};

Card.Link = function CardLink({ children, href, ...rest }) {
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
};

Card.Img = function CardImg({ src, alt, ...rest }) {
  return <img src={src} alt={alt} {...rest} />;
};

Card.Title = function CardTitle({ children, ...rest }) {
  return <h3 {...rest}>{children}</h3>;
};

Card.Text = function CardText({ children, ...rest }) {
  return <p {...rest}>{children}</p>;
};
