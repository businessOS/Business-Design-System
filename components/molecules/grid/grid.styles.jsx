import styled, { keyframes } from "styled-components";

export const Content = styled.div`
  flex: 1 1 auto;
  height: 100%;
  width: ${(props) => props.width + 36 || 1236}px;
  max-width: ${(props) => props.width + 36 || 1236}px;

  margin: 18px;
  padding: 18px;

  border: 1px solid rgb(0, 0, 0, 0.08);
  border-radius: 8px;
  box-shadow: 4px 4px 40px 20px #f1f2f6;
  box-shadow: 4px 4px 40px 20px ${(props) => props.theme.blue};

  .BaseTable__table .BaseTable__body {
    ::-webkit-scrollbar {
      -webkit-appearance: none;
      background-color: ${(props) => props.theme.blue900};
    }

    ::-webkit-scrollbar:vertical {
      width: 10px;
    }

    ::-webkit-scrollbar:horizontal {
      height: 10px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      border: 3px solid ${(props) => props.theme.blue900};
      background-color: #999;

      &:hover {
        background-color: ${(props) => props.theme.darkBlue};
      }
    }

    ::-webkit-resizer {
      display: none;
    }
  }

  .BaseTable__header-row {
    background: #fff;
  }

  .BaseTable__header-cell-text {
    color: #000;
    font-size: 1em;
    font-weight: bold;
    user-select: none;
  }

  .BaseTable__row-cell {
    border: none;
  }

  .BaseTable__row {
    border: none;
    transition: 0.3s;

    &:hover {
      background: #929191;
      .BaseTable__row-cell-text {
        color: #fff;
      }
    }
  }

  .BaseTable__row.active {
    background: #afafaf;
  }

  .BaseTable__header-cell--sortable {
    &:hover {
      background: #dedede;
    }
  }

  .BaseTable__sort-indicator {
    font-size: 0;
    position: relative;
    margin: 0 0 0 5px;
    &:before,
    &:after {
      background: #8c8c8c;
      content: "";
      display: block;
      height: 2px;
      position: absolute;
      top: 7px;
      width: 6px;
    }
    &:before {
      border-radius: 15px 15px;
      left: 6px;
      transform: rotate(45deg);
    }
    &:after {
      border-radius: 0 5px 5px 0;
      left: 3px;
      transform: rotate(-45deg);
    }
  }

  .BaseTable__sort-indicator--descending {
    &:before {
      left: 3px;
    }
    &:after {
      left: 6px;
    }
  }
`;

export const EmptyBox = styled.div`
  align-items: center;
  color: #717171;
  display: flex;
  font-size: 0.9em;
  height: 100%;
  justify-content: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoaderElement = styled.div`
  display: inline-block;
  border-radius: 100%;
  margin: 2px;
  border: 2px solid #0696d7;
  border-bottom-color: transparent;
  margin: 2px;
  width: 22px;
  height: 22px;
  animation: ${rotate} 0.75s linear infinite;
`;

export const BoxImg = styled.div`
  padding: 10px;
  img {
    display: block;
    height: auto;
    max-width: 100%;
    width: 100%;
  }
`;

export const Type = styled.div`
  background: ${({ type }) => colorsType[type]};
  border-radius: 6px;
  color: #fff;
  display: inline-block;
  font-weight: bold;
  padding: 3px 8px;

  &:first-of-type {
    margin: 0 10px 0 0;
  }
`;
