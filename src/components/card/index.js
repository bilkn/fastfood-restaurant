import React from 'react';
import './index.css';

export default function Card({ children, ...rest }) {
  return (
    <div className="px-5 mt-12" {...rest}>
      {children}
    </div>
  );
}

Card.Content = function CardContent({ children, ...rest }) {
  return (
    <div className="card__content p-5" {...rest}>
      {children}
    </div>
  );
};

Card.List = function CardList({ children, ...rest }) {
  return <ul className="maxed grid sm:grid-cols-2 gap-6 md:grid-cols-4"{...rest}>{children}</ul>;
};

Card.Item = function CardItem({ children, ...rest }) {
  return (
    <li className="rounded-xl overflow-hidden" {...rest}>
      {children}
    </li>
  );
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
  return <h3 className="text-lg" {...rest}>{children}</h3>;
};

Card.Text = function CardText({ children, ...rest }) {
  return <p className="card__text" {...rest}>{children}</p>;
};
