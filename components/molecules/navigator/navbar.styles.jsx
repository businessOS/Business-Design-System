import styled, { css } from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-direction: column nowrap;
  flex-flow: space-around;
  min-width: 70vw;
  max-width: 100vw;
  height: 65px;

  margin: 16px 6px;

  background-color: ${(props) => props.white};
  background-clip: border-box;
  overflow: hidden;
  text-align: center;
`;

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    :nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column;

  li {
    padding: 18px 10px;
    color: ${(props) => props.theme.title};
  }

  @media (max-width: ${(props) => props.size.sm}) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.5s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

export default Nav;
