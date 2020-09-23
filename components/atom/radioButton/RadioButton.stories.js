import React from "react";
import { withKnobs, select, text } from "@storybook/addon-knobs";
import { withDesign } from "storybook-addon-designs";

import RadioContainer from "./radioButton";

export const BasicRadioButton = () => (
  <RadioContainer row>
    <input type="radio" name="size" id="small" />
    <label for="small">Writer</label>

    <input type="radio" name="size" id="large" />
    <label for="large">Editor</label>
  </RadioContainer>
);

const parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/AdLCMrcsetwLwtPci90fdp/Admin-Manager?node-id=300%3A0",
  },
};

BasicRadioButton.story = {
  name: "Basic -Radio Button",
  parameters,
};

export default {
  component: BasicRadioButton,
  decorators: [withKnobs, withDesign],
  title: "Atoms|Radio Button",
};
