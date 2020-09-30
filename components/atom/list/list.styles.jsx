import styled, { css } from "styled-components";

const StyledList = styled.div`
  position: relative;
  display: block;

  width: ${(props) => props.width || "300"} px;
  height: ${(props) => props.width || "400"} px;

  outline: none;
  background-color: transparent;

  .container {
    outline: transparent solid 1px;
    margin: 0px;
    padding: 0px;
  }

  .list {
    position: absolute;
    outline: none;

    .listItem {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${(props) => props.rowColor || "transparent"};
      border-radius: 4px;
    }

    .active {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${(props) =>
        props.activeRowColor || props.theme.blue900};
      color: ${(props) => props.theme.darkBlue};
      border-radius: 4px;
    }

    ::-webkit-scrollbar {
      -webkit-appearance: none;
      background-color: ${(props) =>
        props.rowColor ? "transparent" : props.theme.blue900};
    }

    ::-webkit-scrollbar:vertical {
      width: 10px;
    }

    ::-webkit-scrollbar:horizontal {
      height: 10px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      border: 3px solid
        ${(props) => (props.rowColor ? props.rowColor : props.theme.blue900)};
      background-color: #999;

      &:hover {
        background-color: ${(props) =>
          props.rowColor ? props.activeRowColor : props.theme.darkBlue};
      }
    }

    ::-webkit-resizer {
      display: none;
    }
  }
`;

export default StyledList;
