import React, { useState } from "react";

import range from "lodash/range";
import { withKnobs } from "@storybook/addon-knobs";
import { withDesign } from "storybook-addon-designs";

import SearchList from "./searchList";

const items = range(1000).map((i) => <div id={i}>item #{i}</div>);

export const basicSearchList = () => {
  const handleSort = (typeofSort) => { 
    items.reverse();
  }

  //** Must return index if fund it otherwise return undefined ; */
  const handleSearch = (value) => {
    function checkExist(e) {
      const item = e.props.children[0] + ' ' + e.props.children[1];
      return item.indexOf(value) !== -1;
    }
    const index = items.findIndex(checkExist);
    return index;
  };

   const handleFilter = (value) => {
     
   };

  return (
    <div style={{ padding: "49px 49px" }}>
      <SearchList
        rows={items}
        rowSize={55}
        rowGutterSize={8}
        handleSort={handleSort}
        handleSearch={handleSearch}
        handleFilter={handleFilter}
      />
    </div>
  );
};

const parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/AdLCMrcsetwLwtPci90fdp/Admin-Manager?node-id=701%3A0",
  },
};

basicSearchList.story = {
  name: "Basic - Search List",
  parameters,
};

export default {
  component: SearchList,
  decorators: [withKnobs, withDesign],
  title: "Molecule|Search List",
};
