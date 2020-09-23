import styled, { css } from "styled-components";

const StyledRadioButton = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;

  color: darkgray;

  margin: 10px;
  background: transparent;

  input[type="radio"] {
    display: none;
  }

  label {
    position: relative;
    height: 80px;
    width: 150px;

    margin: 0px 5px;

    display: flex;
    align-items: center;

    color: darkgray;

    font-size: 19px;
    font-weight: 500;

    border: 2px solid ${(props) => props.theme.blue100};
    border-radius: 12px;

    cursor: pointer;
  }

  label:before {
    content: "";
    height: 28px;
    width: 28px;
    border: 1px solid ${(props) => props.theme.blue300};
    border-radius: 50%;
    margin: 0px 15px;
  }

  input[type="radio"]:checked + label {
    border: 2px solid ${(props) => props.theme.primary};
    color: ${(props) => props.theme.black};
  }

  input[type="radio"]:checked + label:before {
    content: "";
    position: relative;
    height: 28px;
    width: 28px;
    border: 2px solid ${(props) => props.theme.primary};
    background: ${(props) => props.theme.primary};
    box-shadow: inset 0px 0px 0px 4px ${(props) => props.theme.white};
  }

  ${(props) =>
    props.row &&
    css`
      flex-direction: row;
    `}
`;

export default StyledRadioButton;
