import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = props => {
  // If `href` is provided, render an anchor tag (external link).
  if (props.href) {
    return (
      <a
        className={`button button--${props.size || 'default'} 
          ${props.inverse && 'button--inverse'} 
          ${props.danger && 'button--danger'} 
          ${props.className || ''}`}
        href={props.href}
        target={props.target || '_blank'}
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    );
  }

  // If `to` is provided, render a Link (internal navigation via React Router).
  if (props.to) {
    return (
      <Link
        to={props.to}
        className={`button button--${props.size || 'default'} 
          ${props.inverse && 'button--inverse'} 
          ${props.danger && 'button--danger'} 
          ${props.className || ''}`}
      >
        {props.children}
      </Link>
    );
  }

  // Otherwise, render a standard button.
  return (
    <button
      className={`button button--${props.size || 'default'} 
        ${props.inverse && 'button--inverse'} 
        ${props.danger && 'button--danger'} 
        ${props.className || ''}`}
      type={props.type || 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
