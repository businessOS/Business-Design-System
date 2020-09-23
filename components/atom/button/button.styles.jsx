import styled, { css } from "styled-components";

const StyledButton = styled.button`
	align-items: center;
	display: inline-flex;
	justify-content: center;
	padding: 10px 18px;
	
	border-radius: 6px;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);

	cursor: pointer;
	font-weight: regular;
	line-height: 1;
	outline: none;
	text-decoration: none;
	text-align: center;
	max-height: 50px;
	transition: all 0.3s ease;
	white-space: nowrap;
	margin : 6px;

	.button__icon {
		display: inline-block;
		margin-right: 5px;
	}

    &:active {
	   box-shadow: 0 0 0 transparent;
    }

	${(props) =>
    props.large &&
    css`
      width: 150px;
    `}

	${(props) =>
    props.primary &&
    css`
      background-color: ${props.theme.primary};
      border: 1px solid ${props.theme.primary};
      color: ${props.theme.white};
    `}

	${(props) =>
    props.secondary &&
    css`
      background-color: ${props.theme.secondary};
      border: 1px solid ${props.theme.secondary};
      color: ${props.theme.black100};
    `}

	${(props) =>
    props.tertiary &&
    css`
      background-color: ${props.theme.tertiary};
      border: 1px solid ${props.theme.black};
      color: ${props.theme.white};
    `}
	
	${(props) =>
    props.quartiary &&
    css`
      background-color: ${props.theme.quartiary};
      border: 1px solid ${props.theme.quartiary100};
      color: ${props.theme.quartiary100};
    `}

	${(props) =>
    props.fifth &&
    css`
      background-color: ${props.theme.fifth};
      border: 1px solid ${props.theme.fifth};
      color: ${props.theme.black};
    `}
	
`;

export const StyledLinkButton = styled(StyledButton).attrs({ as: "a" })``;

export default StyledButton;
