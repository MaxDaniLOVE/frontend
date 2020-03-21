import React from 'react';
import { Link } from "react-router-dom";
import './Button.scss';

const Button = (props) => {
  const { to, className, exact, href, type, onClick, disabled } = props;
  if (props.href) {
    return (
      <a
        className={`btn btn-${className} custom-btn`}
        href={href}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={to}
        exact={exact}
        className={`btn btn-${className} custom-btn`}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`btn btn-${className} custom-btn`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {props.children}
    </button>
  );
}

export default Button;
