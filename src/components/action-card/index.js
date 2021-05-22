import React from 'react';

export default function ActionCard({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
}

ActionCard.Wrapper = function ActionCardWrapper({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
};

ActionCard.Title = function ActionCardTitle({ children, ...rest }) {
  return <h3 {...rest}>{children}</h3>;
};

ActionCard.Text = function ActionCardText({ children, ...rest }) {
  return <p {...rest}>{children}</p>;
};
