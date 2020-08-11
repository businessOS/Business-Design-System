import React from "react";
import { withKnobs, select, text } from "@storybook/addon-knobs";
import { withDesign } from "storybook-addon-designs";

import Button from "./button";

import knobData from "./button.knobs.json";
const { icon, innerText } = knobData;

const buttonClicked = e => {
	e.preventDefault();
	alert("Hello");
};

export const basicButton = () => (
	<Button>{text(innerText.label, "Primary", innerText.group)}</Button>
);
export const secondaryButton = () => (
	<Button variant="secondary">
		{text(innerText.label, "Secondary", innerText.group)}
	</Button>
);
export const tertiaryButton = () => (
	<Button variant="tertiary">
		{text(innerText.label, "Tertiary", innerText.group)}
	</Button>
);
export const quartiaryButton = () => (
	<Button variant="quartiary">
		{text(innerText.label, "quartiary", innerText.group)}
	</Button>
);

export const fifthButton = () => (
	<Button variant="fifth">
		{text(innerText.label, "fifth", innerText.group)}
	</Button>
);

export const iconButton = () => (
	<Button icon={select(icon.label, icon.options, icon.default, icon.group)}>
		{text(innerText.label, "Icon button", innerText.group)}
	</Button>
);
export const functionButton = () => (
	<Button onClick={buttonClicked}>
		{text(innerText.label, "Function button", innerText.group)}
	</Button>
);
export const linkedButton = () => (
	<Button href="/route">
		{text(innerText.label, "Link button", innerText.group)}
	</Button>
);


const parameters= {
    design: {
      type: 'figma',
	  url: "https://www.figma.com/file/AdLCMrcsetwLwtPci90fdp/Admin-Manager?node-id=0%3A1"
    }
  }

basicButton.story = {
  name: 'Primary - Button',
  parameters
}

secondaryButton.story = {
	name: 'Secondary - Button',
	parameters
  }

  tertiaryButton.story = {
	name: 'Tertiary - Button',
	parameters
  }
  
  quartiaryButton.story = {
	name: 'quartiary - Button',
	parameters
  }

  
export default {
	component: Button,
	decorators: [withKnobs],
	title: "Atoms|Button"
};