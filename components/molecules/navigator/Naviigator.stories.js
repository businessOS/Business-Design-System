import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { withDesign } from "storybook-addon-designs";

import Navbar from "./navbar";
import knobData from "./navigator.knobs.json";

export const ColumnNavbar = () => <Navbar routes={knobData.routes} />;
export const RowNavbar = () => <Navbar routes={knobData.routes} row />;

const parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/AdLCMrcsetwLwtPci90fdp/Admin-Manager?node-id=570%3A0",
  },
};

ColumnNavbar.story = {
  name: "Column - Navbar",
  parameters,
};

RowNavbar.story = {
  name: "Row - Navbar",
  parameters,
};

export default {
  component: Navbar,
  decorators: [withKnobs, withDesign],
  title: "Molecule|Navbar",
};
