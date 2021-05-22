import React from 'react';

export default function ActionCard({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
}

ActionCard.Wrapper = function ActionCardWrapper({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
};

ActionCard.List = function ActionCardList({ children, ...rest }) {
  return <ul {...rest}>{children}</ul>;
};

ActionCard.Item = function ActionCardItem({ children, ...rest }) {
  return <li {...rest}>{children}</li>;
};

ActionCard.Title = function ActionCardTitle({ children, ...rest }) {
  return <h3 {...rest}>{children}</h3>;
};

ActionCard.Text = function ActionCardText({ children, ...rest }) {
  return <p {...rest}>{children}</p>;
};

ActionCard.Price = function ActionCardPrice({ children, ...rest }) {
  return <p {...rest}>{children}</p>;
};
