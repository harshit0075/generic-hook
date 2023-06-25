import React from "react";
import "./Input.css";
import PropTypes from "prop-types";

const Input = (props) => {
  const {
    type= "text",
    size='md',
    variant,
    value,
    onChange,
    ...rest
  }= props

  return <input data-testid="inputTag"
  type={type}
  className={`${size} ${variant}`}
  value={value}
  onChange={(e)=>onChange(e.target.value)}
  {...rest}
  />;
};

Input.propTypes={
  type:PropTypes.string,
  size:PropTypes.string,
  variant:PropTypes.string.isRequired,
  value:PropTypes.string,
  onChange:PropTypes.func,
}
export default Input;
