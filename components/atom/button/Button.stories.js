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
	<Button primary large>{text(innerText.label, "Primary", innerText.group)}</Button>
);
export const secondaryButton = () => (
	<Button secondary large>
		{text(innerText.label, "Secondary", innerText.group)}
	</Button>
);
export const tertiaryButton = () => (
	<Button tertiary large>
		{text(innerText.label, "Tertiary", innerText.group)}
	</Button>
);
export const quartiaryButton = () => (
	<Button quartiary large>
		{text(innerText.label, "uartiary", innerText.group)}
	</Button>
);

export const fifthButton = () => (
	<Button fifth large>
		{text(innerText.label, "Fifth", innerText.group)}
	</Button>
);

export const iconButton = () => (
	<Button primary large icon={select(icon.label, icon.options, icon.default, icon.group)}>
		{text(innerText.label, "Icon", innerText.group)}
	</Button>
);
export const functionButton = () => (
	<Button primary large onClick={buttonClicked}>
		{text(innerText.label, "Function", innerText.group)}
	</Button>
);
export const linkedButton = () => (
	<Button primary href="/route">
		{text(innerText.label, "Link button", innerText.group)}
	</Button>
);


const parameters= {
    design: {
      type: 'figma',
	  url: "https://www.figma.com/file/AdLCMrcsetwLwtPci90fdp/Admin-Manager?node-id=57%3A2"
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

  fifthButton.story = {
	name: 'Fifth - Button',
	parameters
  }
  
export default {
	component: Button,
	decorators: [withKnobs, withDesign],
	title: "Atoms|Button"
};