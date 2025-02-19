import React from "react";

const Button = ({ children, href, onClick, className }) => {
  const classes =
    "my-3 min-w-10 rounded px-3 py-2 font-semibold capitalize tracking-wider text-white";
  const renderbtn = () => (
    <button
      onClick={onClick}
      className={`${classes} ${className} bg-primary-color hover:bg-violet-600`}
    >
      {children}
    </button>
  );
  const renderLink = () => (
    <button
      onClick={onClick}
      href={href}
      className={`${classes} ${className} bg-yellow-500 hover:bg-red-600`}
    >
      {children}
    </button>
  );

  return href ? renderLink() : renderbtn();
};

export default Button;
