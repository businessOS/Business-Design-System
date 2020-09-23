import React from "react";
import { withKnobs,  text } from "@storybook/addon-knobs";
import { withDesign } from "storybook-addon-designs";

import Input from "./Input";
import knobData from "./input.knobs.json";

const {  innerText } = knobData;

export const basicInput = () => (
	<Input 
      title="Email" 
      variant="mone"
      status = "none"
		  placeholder = "Indicate your email"
  />
);

export const sucessInput = () => (
	<Input value={text(innerText.label, "Primary", innerText.group)} 
      title="Last Name" 
      status = "valid"
      placeholder = "Indicate your email"
  />
);

export const warningInput = () => (
	<Input value={text(innerText.label, "Primary", innerText.group)} 
      title="Email" 
      status = "invalid"
      placeholder = "Indicate your email"
      mesageError= "please you must indicate a valid email"
  />
);

export const errorInput = () => (
	<Input value={text(innerText.label, "Primary", innerText.group)} 
      title="Last Name" 
      status = "invalid"
      placeholder = "Indicate your email"
      mesageError= "please you must indicate the last name"
  />
);

const parameters= {
    design: {
      type: 'figma',
	  url: "https://www.figma.com/file/AdLCMrcsetwLwtPci90fdp/Admin-Manager?node-id=179%3A2"
    }
  }

basicInput.story = {
  name: 'Basic - Input',
  parameters
}

sucessInput.story = {
  name: 'Sucess - Input',
  parameters
}

warningInput.story = {
  name: 'Warning - Input',
  parameters
}

errorInput.story = {
  name: 'Error - Input',
  parameters
}

export default {
	component: Input,
	decorators: [withKnobs, withDesign],
	title: "Atoms|Input"
};