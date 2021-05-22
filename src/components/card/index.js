import React from 'react';

export default function Card({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
}

Card.List = function CardList({ children, ...rest }) {
  <ul {...rest}>{children}</ul>;
};

Card.Item = function CardItem({ children, ...rest }) {
  <li {...rest}>{children}</li>;
};

Card.Img = function CardImg({ src, alt, ...rest }) {
  <img src={src} alt={alt} {...rest} />;
};

Card.Title = function CardTitle({ children, ...rest }) {
  <h3 {...rest}>{children}</h3>;
};

Card.Text = function CardText({ children, ...rest }) {
  <p {...rest}>{children}</p>;
};
