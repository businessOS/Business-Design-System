import React, { useState }  from "react";
import range from "lodash/range";

import { withKnobs, select, text } from "@storybook/addon-knobs";
import { withDesign } from "storybook-addon-designs";

import List from "./list";
import "./list.css";

const items = range(1000).map((i) => <div>item #{i}</div>);

export const basicList = () => {
  const [selection, setSelection] = useState(null);
  return (
    <div style={{ padding: "49px 49px" }}>
      <List
        rows={items}
        rowCount={items.length}
        rowSize={35}
        selection={selection}
        setSelection={setSelection}
      />
    </div>
  );
};

const parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/AdLCMrcsetwLwtPci90fdp/Admin-Manager?node-id=57%3A2",
  },
};

basicList.story = {
  name: "Infinite Loader - List",
  parameters,
};

export default {
  component: List,
  decorators: [withKnobs, withDesign],
  title: "Atoms|List",
};
