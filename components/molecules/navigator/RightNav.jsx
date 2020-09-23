import React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  .NavLink .FontAwesomeIcon {
    display: none;
  }

  li {
    padding: 18px 8px;
    font-size: 18px;
    color: ${(props) => props.theme.black};
    .NavLink .selected {
      border-bottom: 1px solid ${(props) => props.theme.primary};
    }
  }

  ${(props) =>
    props.row &&
    css`
      position: fixed;
      flex-flow: column nowrap;
      top: 56px;
      left: 0px;
      height: 96vh;
      width: 300px;

      padding-bottom: 3.5rem;

      background-color: ${(props) => props.primary};

      li {
        color: ${(props) => props.theme.title};

        .NavLink {
          position: relative;
        }
        .NavLink .FontAwesomeIcon {
          display: inline-flex;
          align-self: center;
          margin-right: 18px;

          background: ${(props) => props.theme.blue050};
          color: ${(props) => props.theme.grey};

          padding: 7px 10px;
          border-radius: 6px;
        }
        .NavLink .point {
          display: none;
        }

        .NavLink .selected .point {
          position: absolute;
          left: 221px;
          top: 8px;
          display: inline-flex;
          align-self: center;

          width: 8px;
          height: 8px;

          background: ${(props) => props.theme.primary};
          border-radius: 50%;
        }
        .NavLink .selected {
          color: ${(props) => props.theme.black};
          border-bottom: none;
        }
        .NavLink .selected .FontAwesomeIcon {
          background: ${(props) => props.theme.primary};
          color: ${(props) => props.theme.white};
        }
      }
    `};

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${(props) => props.white};
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(600px)" : "translateX(0)")};
    top: 56px;
    left: -600px;
    height: 80vh;
    width: 300px;
    padding-top: 3.5rem;

    li {
      color: ${(props) => props.theme.title};

      .NavLink {
        position: relative;
      }
      .NavLink .FontAwesomeIcon {
        display: inline-flex;
        align-self: center;
        margin-right: 18px;

        background: ${(props) => props.theme.blue050};
        color: ${(props) => props.theme.grey};

        padding: 7px 10px;
        border-radius: 6px;
      }
      .NavLink .point {
        display: none;
      }

      .NavLink .selected .point {
        position: absolute;
        left: 221px;
        top: 8px;
        display: inline-flex;
        align-self: center;

        width: 8px;
        height: 8px;

        background: ${(props) => props.theme.primary};
        border-radius: 50%;
      }
      .NavLink .selected {
        color: ${(props) => props.theme.black};
        border-bottom: none;
      }
      .NavLink .selected .FontAwesomeIcon {
        background: ${(props) => props.theme.primary};
        color: ${(props) => props.theme.white};
      }
    }

    ${(props) =>
      props.row &&
      css`
        position: absolute;
        flex-flow: row nowrap;
        justify-content: space-around;

        top: 0px;
        bottom: 100px;
        left: 0px;

        width: 96vw;
        height: 56px;
        padding: 0px;

        background-color: ${(props) => props.primary};

        li {
          .label {
            display: none;
          }
          .NavLink {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .NavLink .selected .point {
            display: none;
          }
        }
      `}
  }
`;

const RightNav = ({ open, routes, ...props }) => {
  const isActive = (path, match, location) =>
    !!(match || path === location.pathname);
  return (
    <div>
      <Router>
        <Ul open={open} {...props}>
          {routes.map((route, index) => {
            return (
              <li key={index}>
                <span className="NavLink">
                  <NavLink
                    to={route.path}
                    activeClassName="selected"
                    isActive={isActive.bind(this, route.path)}
                    exact={route.exact}
                  >
                    <span className="FontAwesomeIcon">
                      <FontAwesomeIcon icon={["fa", `${route.icon}`]} />
                    </span>
                    <span className="label">{route.label}</span>
                    <span className="point"></span>
                  </NavLink>
                </span>
              </li>
            );
          })}
        </Ul>
        <Switch>
          {routes.map((route, index) => (
            // You can render a <Route> in as many places
            // as you want in your app. It will render along
            // with any other <Route>s that also match the URL.
            // So, a sidebar or breadcrumbs or anything else
            // that requires you to render multiple things
            // in multiple places at the same URL is nothing
            // more than multiple <Route>s.
            <Route key={index} path={route.path} exact={route.exact} />
          ))}
        </Switch>
      </Router>
    </div>
  );
};

export default RightNav;
