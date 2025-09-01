import React from "react";
import PropTypes from "prop-types";
import "../App.css";

const Button = ({ variant = "primary", size = "md", disabled = false, children, onClick, type = "button" }) => {
  const className = `btn btn-${variant} btn-${size} ${disabled ? "btn-disabled" : ""}`;
  return (
    <button className={className} disabled={disabled} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["danger", "success", "warning", "info"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;


