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
  return <ul className="space-y-6" {...rest}>{children}</ul>;
};

ActionCard.Item = function ActionCardItem({ className, children, ...rest }) {
  return (
    <li className={`bg-no-repeat bg-center bg-cover px-5 py-6 ${className || ''}`} {...rest}>
      {children}
    </li>
  );
};

ActionCard.Title = function ActionCardTitle({ children, ...rest }) {
  return <h3 className="text-2xl" {...rest}>{children}</h3>;
};

ActionCard.Text = function ActionCardText({ children, ...rest }) {
  return <p className="mt-4" {...rest}>{children}</p>;
};

ActionCard.Price = function ActionCardPrice({ children, ...rest }) {
  return <p {...rest}>{children}</p>;
};
