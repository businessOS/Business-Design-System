import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  max-width: 260px;
  margin: 16px;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 20px;
  box-shadow: 4px 4px 40px 20px #f1f2f6;
  box-shadow: 4px 4px 40px 20px rgba(0, 0, 0, 0.1);
  
  overflow: hidden;

  text-align: justify;

  ${(props) =>
    props.center &&
    css`
      justify-content: center;
      align-items: center;
      text-align: center;
    `}
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  min-height: 1px;
  padding: 1.25rem;
  .card__button{
    margin-bottom: 18px;
  }
`;

export const Title = styled.h3`
  font-weight: bold;
  text-align: justify;
  margin-bottom: 2px;

  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `}
`;

export const Text = styled.p`
  line-height: 25px;
  color: #6c757d;
  text-align: justify;
  margin-bottom: 18px;

  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `}
`;

export const Image = styled.img`
  display: flex;
  width: 100%;
  margin: 18px;
  
  ${(props) =>
    props.small &&
    css`
      width: 34px;
      height: 34px;
      text-align: center;
    `}
`;
