import styled, { css } from "styled-components";

const StyledSearchList = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  border: 1px solid ${(props) => props.theme.blue100};
  border-radius: 8px;

  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.title};

  width: 400px;
  height: 500px;

  margin-bottom: 18px;

  .card {
    display: inline-block;
    height: 42px;
    background-color: transparent;

    input {
      position: absolute;

      width: 312px;
      height: 38px;

      padding-left: 32px;
      margin: 4px;

      outline: none;
      border: 1px solid ${(props) => props.theme.blue100};
      border-radius: 8px 0px 0px 8px;

      font-size: 17px;

      background: ${(props) => props.theme.blue900};
      color: ${(props) => props.theme.black};

      &::placeholder {
        color: ${(props) => props.theme.grey};
        font-size: 17px;
      }

      &:focus {
        background: ${(props) => props.theme.white};
        border: 1px solid ${(props) => props.theme.primary};
      }

      ${(props) =>
        props.status &&
        css`
          border: 1px solid
            ${(props) =>
              props.status === "notFound"
                ? props.theme.fifth
                : props.theme.blue900};
        `}
    }

    .searchIcon {
      position: relative;
      float: left;
      top: 16px;
      left: 14px;

      width: 14px;
      height: 14px;
    }
  }

  .card .sortIcon,
  .filterIcon {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 38px;
    height: 38px;
    top: 4px;

    background-color: ${(props) => props.theme.blue900};
    color: ${(props) => props.theme.grey};

    border: 1px solid ${(props) => props.theme.blue100};
    border-radius: 0px 4px 4px 0px;

    &:hover {
      background: ${(props) => props.theme.blue100};
      border: 1px solid ${(props) => props.theme.primary};
      color: ${(props) => props.theme.darkBlue};
    }
    cursor: pointer;
  }

  .sortIcon {
    right: 43px;
  }

  .filterIcon {
    right: 4px;
  }

  .card .sortIcon .icon {
    width: 18px;
    height: 18px;
  }

  .card .filterIcon .icon {
    width: 18px;
    height: 18px;
  }

  .items {
    position: relative;
    margin: 0px 4px;
    height: 80%;
  }
`;

export default StyledSearchList;
