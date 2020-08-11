import styled from "styled-components";

const buttonBackground = (props, typeColor) => {
	// Fallback value if we can't get access to props
	if (!props || !props.theme || !props.theme.primary) return "#00FFFF";
	// If no variant is specified, return the primary colour in our theme
	if (!props.variant) return props.theme.primary;

	// Dynamically determine the background colour based on props
	let colour;
	let textColour;
	let textBorder;
	switch (props.variant) {
		case "primary":
			colour = props.theme.primary;
			textBorder = colour;
			textColour = props.theme.white
			break;
		case "secondary":
			colour = props.theme.secondary;
			textColour = props.theme.black100;
			textBorder = colour;
			break;
		case "tertiary":
			colour = props.theme.tertiary;
			textColour= props.theme.white;
			textBorder = colour;
			break;
		case "quartiary":
			colour = props.theme.quartiary;
			textColour= props.theme.quartiary100;
			textBorder = textColour;
			break;
		case "fifth":
			colour = props.theme.fifth;
			textColour= props.theme.black;
			textBorder = colour;
			break;
		default:
			colour = props.theme.primary;
			textColour = props.theme.black;
			textBorder = colour;
			break;
	}

	return typeColor === 1 ? colour : typeColor === 2 ? textColour : textBorder;
};

const StyledButton = styled.button`
	align-items: center;
	display: inline-flex;
	padding: 16px;
	background-color: ${props => buttonBackground(props, 1)};
	border: 1px solid ${props => buttonBackground(props, 3)} ;
	border-radius: 6px;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	color: ${props => buttonBackground(props, 2)};
	cursor: pointer;
	font-weight: 700;
	line-height: 1;
	outline: none;
	text-decoration: none;
	max-height: 50px;
	transition: all 0.5s ease;
	white-space: nowrap;
	margin : 16px;
	.button__icon {
		display: inline-block;
		margin-right: 6px;
	}
`;

export const StyledLinkButton = styled(StyledButton).attrs({ as: "a" })``;

export default StyledButton;