import React from "react";

import { Card } from "../card/card";
import validIcon from "../../../assets/images/icons/valid.png";
import warningIcon from "../../../assets/images/icons/Warning.png";
import inValidIcon from "../../../assets/images/icons/invalid.png";

const Toast = ({ children, title, text, ...props }) => {
  const { sucess, warning, error } = props;
  const buttonTitle = props.sucess ? "Continue" : "Try Againg";
  let icon = validIcon;
  if (warning) icon = warningIcon;
  else if (error) icon = inValidIcon;

  return (
    <Card {...props}>
      <Card.Body center>
        <Card.Image small src={icon} alt="sucess" />
        <Card.Title center>{title}</Card.Title>
        <Card.Text center>{text}</Card.Text>
        <Card.Button primary={sucess} fifth={warning} tertiary={error}>
          {buttonTitle}
        </Card.Button>
      </Card.Body>
    </Card>
  );
};

export default Toast;
