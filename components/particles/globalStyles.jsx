import { createGlobalStyle } from "styled-components";
import "normalize.css/normalize.css";

const GlobalStyle = createGlobalStyle`
		/* Accessibly remove animations: https://gist.githubusercontent.com/bellangerq/6cdfe6e3701b4048c72546960c7c9f66/raw/dc5036697d0da57eff8e0f659106b319102e72a0/a11y-disable-animations.css */
	@media (prefers-reduced-motion: reduce) {
		*,
		*::before,
		*::after {
			animation-duration: 0.001ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.001ms !important;
		}
	}

	html {
		color: black;
	  font-family: Roboto, Oxygen, "Helvetica Neue", sans-serif;
		font-size: 62.5%;
		/* BETTER FONT SMOOTHING - https://gist.github.com/hsleonis/55712b0eafc9b25f1944 */
		font-variant-ligatures: none;
		-webkit-font-variant-ligatures: none;
		text-rendering: optimizeLegibility;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
	}

	html {
		box-sizing: border-box;
	}

	*, *:before, *:after {
		box-sizing: inherit;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	p {
		a {
			color: ${props => props.theme.primary};

			&:active,
			&:focus,
			&:hover {
				text-decoration: underline;
			}
		}
	}

	body {
		overflow-y: scroll;
		background-color: ${props => props.theme.white};
		font-size: 1.6rem;
		line-height: 1.5;
		scroll-behavior: smooth;
	}

	main {
		flex: 1;
		margin: 0 auto;
		width: 100%;

		> * {
			margin-left: auto;
			margin-right: auto;
			max-width: 1440px;
		}
	}

	#___gatsby {
		/* Fix anchor scroll positioning */
		[id]::before {
			display: block;
			content: '';
			margin-top: -4rem;
			height: 4rem;
		}
	}

	.wrapper {
		overflow: hidden;

		@supports (display: flex) {
			display: flex;
			flex-direction: column;
			min-height: 100vh;
		}
	}


	/* Common base styles for the site */
	figure, img, svg, video {
		max-width: 100%;
	}

	figure {
		width: auto !important;
	}

	video {
		display: block;
		width: 100%;
	}

	h1, h2, h3, h4, h5, h6 {
		line-height: 1.25;
		margin: 16px 0;

		font-weight: 700;
		text-transform: capitalize;
	}

	h1,
	.h1 {
		margin-bottom: 24px;
		margin-top: 24px;

		font-size: 43px;
		font-weight: 700;
		line-height: 1.1;
	}

	h2,
	.h2 {
		font-size: 35px;
	}

	h3,
	.h3 {
		font-size: 26px;
	}

	h4,
	.h4 {
		font-size: 21px;
	}

	h5,
	.h5 {
		font-size: 18px;
	}

	h6,
	.h6 {
		font-size: 16px;
	}
` ;

export default GlobalStyle;