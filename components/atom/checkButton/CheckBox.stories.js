import React, { useState } from "react";
import { withKnobs, select, text } from "@storybook/addon-knobs";
import { withDesign } from "storybook-addon-designs";

import Checkbox from "./checkBox";

import knobData from "./checkBox.knobs.json";
const { size, innerText, icon } = knobData;

export const basicCheckbox = () => {
	return <div style={{margin:"25px"}}>
	    <Checkbox size={size.large}>
		    {text(innerText.label, "Basic Checkbox", innerText.group)}
		</Checkbox>
    </div>
};

export const iconCheckbox = () => (
	<div style={{margin:"25px"}}>
	<Checkbox size={size.large} icon={select(icon.label, icon.options, icon.default, icon.group)} >
	    {text(innerText.label, "Business", innerText.group)}
	</Checkbox >
	</div>
);

const parameters= {
    design: {
      type: 'figma',
	  url: "https://www.figma.com/file/AdLCMrcsetwLwtPci90fdp/Admin-Manager?node-id=57%3A23"
    }
  }

basicCheckbox.story = {
  name: 'Basic - Checkbox',
  parameters
}

iconCheckbox.story = {
	name: 'Image - Checkbox',
	parameters
  }

export default {
	component: Checkbox,
	decorators: [withKnobs, withDesign],
	title: "Atoms|Checkbox"
};