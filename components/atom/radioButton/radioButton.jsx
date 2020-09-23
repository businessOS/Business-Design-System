import React from "react";
import StyledRadioButton from "./radioButton.styles";
import { node } from "prop-types";

const RadioContainer = ({ children, ...props }) => {
  return <StyledRadioButton {...props}>{children}</StyledRadioButton>;
};

// Expected prop values
RadioContainer.propTypes = {
  children: node.isRequired,
};

export default RadioContainer;
