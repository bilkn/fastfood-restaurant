import React from 'react';
import './index.css';

export default function ActionCard({ children, ...rest }) {
  return (
    <div className="px-5 py-12" {...rest}>
      {children}
    </div>
  );
}

ActionCard.Wrapper = function ActionCardWrapper({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
};

ActionCard.List = function ActionCardList({ children, ...rest }) {
  return <ul className="grid gap-6 sm:grid-cols-2" {...rest}>{children}</ul>;
};

ActionCard.Item = function ActionCardItem({ className, children, ...rest }) {
  return (
    <li className={`bg-no-repeat bg-center bg-cover px-5 py-6 rounded overflow-hidden ${className || ''}`} {...rest}>
      {children}
    </li>
  );
};

ActionCard.Title = function ActionCardTitle({ children, ...rest }) {
  return <h3 className="text-2xl" {...rest}>{children}</h3>;
};

ActionCard.Text = function ActionCardText({ children, ...rest }) {
  return <p className="mt-2" {...rest}>{children}</p>;
};

ActionCard.Price = function ActionCardPrice({ children, ...rest }) {
  return <p className="action-card__price text-xl mt-1" {...rest}>{children}</p>;
};
