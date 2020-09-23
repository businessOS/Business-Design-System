import React from "react";
import { array, bool } from "prop-types";
import styled, { css } from "styled-components";

import Burger from "./burguer";
import "../../particles/fontawesome.jsx";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  border-top: none;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }

  ${(props) =>
    props.row &&
    css`
      position: absolute;
      border-bottom: 0px;
      bottom: 10px;

      .logo {
        display: none;
      }
    `}

  @media (max-width: 768px) {
    ${(props) =>
      props.row &&
      css`
        border-top: 2px solid #f1f1f1;
      `}
  }
`;

const Navbar = ({ routes, ...props }) => {
  return (
    <Nav {...props}>
      <div className="logo">Nav Bar</div>
      <Burger routes={routes} {...props} />
    </Nav>
  );
};

Navbar.propTypes = {
  routes: array.isRequired,
  row: bool,
};

export default Navbar;
