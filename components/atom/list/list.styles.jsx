import styled, { css } from "styled-components";

const StyledList = styled.div`
  position: absolute;
  display: block;

  width: ${(props) => props.width || "300"} px;
  height: ${(props) => props.width || "400"} px;

  outline: ${(props) => props.listColor || "transparent"} solid 1px;
  background-color: transparent; 
`;

export default StyledList;
