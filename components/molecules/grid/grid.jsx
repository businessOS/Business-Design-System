import React from "react";
import BaseTable, { SortOrder } from "react-base-table";

import "react-base-table/styles.css";
import { Content } from "./grid.styles";

const customWidth = 850;
const defaultSort = { key: "name", order: SortOrder.ASC };
const Table = (props) => <BaseTable {...props} />;

export default class Grid extends React.Component {
  state = {
    data: this.props.data,
    sortBy: defaultSort,
  };

  onColumnSort = (sortBy) => {
    const order = sortBy.order === SortOrder.ASC ? 1 : -1;
    const data = [...this.state.data];
    data.sort((a, b) => (a[sortBy.key] > b[sortBy.key] ? order : -order));
    this.setState({
      sortBy,
      data,
    });
  };

  render() {
    const { data, sortBy } = this.state;
    return (
      <Content width={this.props.width || customWidth} {...this.props}>
        <Table
          fixed
          columns={this.props.columns}
          data={data}
          sortBy={sortBy}
          onColumnSort={this.onColumnSort}
          width={this.props.width || customWidth}
          height={this.props.height || 400}
        />
      </Content>
    );
  }
}
