import React, { useEffect, useState } from "react";
import { withKnobs, select, text } from "@storybook/addon-knobs";
import { withDesign } from "storybook-addon-designs";

import ListCard from "./listCard";
import image from "../../../assets/images/bruno.jpg";
import "./list2.css";

//We’ll use this function inside our loadMoreItems implementation.
const getUrl = (cant, start) =>
  `https://public.opendatasoft.com/api/records/1.0/search/?dataset=worldcitiespop&sort=population&fields=population,accentcity&rows=${cant}&start=${start}&facet=country`;

const GUTTER_SIZE = 8;
const ROW_HEIGHT = 86;
let items = [];
let rows = [];

export const basicListCard = () => {
  const [isLoadding, setIsLoadding] = useState(false);
  const [isLoadded, setIsLoadded] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
  };

  /** Request data once in the component live **/
  useEffect(() => {
    fetch(getUrl(100, 0))
      .then((response) => response.json())
      .then((data) => {
        data.records.forEach((city, index) => {
          items[index] = city.fields;
        });
        if (items.length > 0) {
          /** Triger formatting data */
          setIsLoadding(true);
        }
      });
  }, []);

  /** Formating data every time isLoadding changing **/
  useEffect(() => {
    if (isLoadding) {
      items.map(
        (city, index) =>
          (rows[index] = (
            <div key={index}>{`${city.accentcity}: ${city.population}`} </div>
          ))
      );
      if (rows.length !== undefined) {
        /** Triger render */
        setIsLoadded(true);
      }
    }
  }, [isLoadding]);

  return (
    <div style={{ padding: "49px 49px" }}>
      {isLoadded && (
        <ListCard
          title="Freddy Grand"
          subTitle="Fullstack Developer"
          btnTitle="Edit profile"
          image={image}
          handleClick={handleClick}
          titleList="Population"
          rows={rows}
          rowSize={ROW_HEIGHT}
          rowGutterSize={GUTTER_SIZE}
        />
      )}
      {!isLoadded && <div>Loadding...!</div>}
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

basicListCard.story = {
  name: "Basic - List Card",
  parameters,
};

export default {
  component: ListCard,
  decorators: [withKnobs, withDesign],
  title: "Molecule|List Card",
};
