import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { withDesign } from "storybook-addon-designs";

import Toast from "./toast";
import knobData from "./toast.knobs.json";
const { icon, innerText } = knobData;

export const ToastSucess = () => (
  <Toast title="All Done" text="Star building your business" sucess />
);

export const ToastWarning = () => (
  <Toast title="Warning" text="You must verify all data" warning />
);

export const ToastError = () => (
  <Toast title="Error" text="Please Try again" error />
);

const parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/AdLCMrcsetwLwtPci90fdp/Admin-Manager?node-id=326%3A2",
  },
};

ToastSucess.story = {
  name: "Sucess - Toats",
  parameters,
};

ToastWarning.story = {
  name: "Warning - Toats",
  parameters,
};

ToastError.story = {
  name: "Error - Toats",
  parameters,
};

export default {
  component: Toast,
  decorators: [withKnobs, withDesign],
  title: "Molecule|Toast",
};
