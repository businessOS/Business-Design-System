import React, { useEffect, useState } from "react";
import { withKnobs, select, text } from "@storybook/addon-knobs";
import { withDesign } from "storybook-addon-designs";

import { Column, SortOrder } from "react-base-table";

import styled from "styled-components";
import Text from "react-texty";
import faker from "faker";

import Grid from "./grid";
import Button from "../../atom/button/button";

const dataGenerator = () => ({
  id: faker.random.uuid(),
  name: faker.name.findName(),
  gender: faker.random.boolean() ? "male" : "female",
  score: {
    math: faker.random.number(70) + 30,
  },
  birthday: faker.date.between(1995, 2005),
  attachments: faker.random.number(5),
  description: faker.lorem.sentence(),
  email: faker.internet.email(),
  country: faker.address.country(),
  address: {
    street: faker.address.streetAddress(),
    city: faker.address.city(),
    zipCode: faker.address.zipCode(),
  },
});

const GenderContainer = styled.div`
  background-color: ${(props) =>
    props.gender === "male" ? "lightblue" : "pink"};
  color: white;
  border-radius: 3px;
  width: 20px;
  height: 20px;
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  text-align: center;
`;

const Gender = ({ gender }) => (
  <GenderContainer gender={gender}>
    {gender === "male" ? "♂" : "♀"}
  </GenderContainer>
);

const Score = styled.span`
  color: ${(props) => (props.score >= 60 ? "green" : "red")};
`;

const Attachment = styled.div`
  background-color: lightgray;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 4px;
  color: gray;
`;

const defaultData = new Array(5000)
  .fill(0)
  .map(dataGenerator)
  .sort((a, b) => (a.name > b.name ? 1 : -1));

const columns = [
  {
    key: "name",
    title: "Name",
    dataKey: "name",
    width: 120,
    resizable: true,
    sortable: true,
    frozen: Column.FrozenDirection.LEFT,
  },
  {
    key: "score",
    title: "Score",
    dataKey: "score.math",
    width: 60,
    align: Column.Alignment.CENTER,
    sortable: false,
  },
  {
    key: "gender",
    title: "♂ ♀",
    dataKey: "gender",
    cellRenderer: ({ cellData: gender }) => <Gender gender={gender} />,
    width: 60,
    align: Column.Alignment.CENTER,
    sortable: true,
  },
  {
    key: "birthday",
    title: "Birthday",
    dataKey: "birthday",
    dataGetter: ({ column, rowData }) =>
      rowData[column.dataKey].toLocaleDateString(),
    width: 100,
    align: Column.Alignment.RIGHT,
    sortable: true,
  },
  {
    key: "attachments",
    title: "Attachments",
    dataKey: "attachments",
    width: 60,
    align: Column.Alignment.CENTER,
    headerRenderer: () => <Attachment>?</Attachment>,
    cellRenderer: ({ cellData }) => <Attachment>{cellData}</Attachment>,
  },
  {
    key: "description",
    title: "Description",
    dataKey: "description",
    width: 200,
    resizable: true,
    sortable: true,
    cellRenderer: ({ cellData }) => <Text>{cellData}</Text>,
  },
  {
    key: "email",
    title: "Email",
    dataKey: "email",
    width: 200,
    resizable: true,
    sortable: true,
  },
  {
    key: "country",
    title: "Country",
    dataKey: "country",
    width: 150,
    resizable: true,
    sortable: true,
  },
  {
    key: "address",
    title: "Address",
    dataKey: "address.street",
    width: 150,
    resizable: true,
  },
  {
    key: "action",
    width: 100,
    align: Column.Alignment.CENTER,
    frozen: Column.FrozenDirection.RIGHT,
    cellRenderer: ({ rowData }) => (
      <Button
        quartiary
        onClick={() => {
          this.setState({
            data: this.state.data.filter((x) => x.id !== rowData.id),
          });
        }}
      ></Button>
    ),
  },
];

export const basicGrid = () => {
  return <Grid columns={columns} data={defaultData} width={850} height={365} />;
};

const parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/AdLCMrcsetwLwtPci90fdp/Admin-Manager?node-id=701%3A0",
  },
};

basicGrid.story = {
  name: "Basic - Grid",
  parameters,
};

export default {
  component: basicGrid,
  decorators: [withKnobs, withDesign],
  title: "Molecule|Grid",
};
