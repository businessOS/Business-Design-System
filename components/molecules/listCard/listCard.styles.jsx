import styled, { css } from "styled-components";

const StyledList = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  border: 8px solid ${(props) => props.theme.white};
  border-radius: 18px;

  background-color: ${(props) => props.theme.darkBlue};
  color: ${(props) => props.theme.darkBlue100};
  box-shadow: 4px 4px 40px 20px rgba(0, 0, 0, 0.3);

  width: ${(props) => props.listWidth || "430px"};
  height: ${(props) => props.listHeight || "400px"};
  margin: 18px;
  padding: 18px;

  overflow: hidden;

  .card {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    top: 18px;
    left: 18px;
    height: 110px;

    .image {
      width: 115px;
      height: 110px;
      margin-right: 35px;
      border-radius: 6px;
    }

    .title {
      width: 100%;
      height: 110px;
      display: flex;
      flex-flow: column;
      align-items: flex-start;

      h4 {
        color: ${(props) => props.theme.white};
        margin-bottom: 3px;
        font-weight: regular;
      }

      p {
        margin-bottom: 11px;
        font-size: 14px;
        font-weight: regular;
        text-transform: uppercase;
      }

      .btn-darkBlue {
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        line-height: 1;
        outline: none;
        text-decoration: none;
        text-align: center;
        max-width: 150px;
        max-height: 50px;
        transition: all 0.3s ease;
        white-space: nowrap;

        padding: 12px 18px;
        margin-top: 5px;

        background: transparent;
        color: ${(props) => props.theme.darkBlue200};
        border: 2px solid ${(props) => props.theme.darkBlue200};
        border-radius: 6px;

        &:hover {
          background-color: ${(props) => props.theme.darkBlue100};
          color: ${(props) => props.theme.white};
        }
        &:active {
          color: ${(props) => props.theme.title};
        }
      }
    }
  }

  .items {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    align-items: baseline;
    justify-content: space-between;
    margin: 18px 0px;
    height: 90%;

    span {
      font-size: 18px;
      font-weight: 500;
      letter-spacing: 2px;
      padding-left: 3px;
    }
  }
`;

export default StyledList;
