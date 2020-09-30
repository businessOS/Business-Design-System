import React, { useState } from "react";
import { array, number } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import StyledList from "./searchList.styles";
import List from "../../atom/list/list";

import "../../particles/fontawesome.jsx";

const SearchList = ({
  rows,
  rowSize,
  rowGutterSize,
  handleSort,
  handleSearch,
  handleFilter,
  ...props
}) => {
  /*****************************************************/
  /**                  Input                          **/
  /*****************************************************/
  // create a default prop to input value
  const [inputValue, setInputValue] = useState("");
  //** Used to scroll the list to custom index */
  const [selection, setSelection] = useState(null);
  // create a default function to handle input change
  const handleInputChanges = (e) => {
    e.preventDefault();
    // Handle filter and other stuff.
    setInputValue(e.target.value);

    const index = handleSearch(e.target.value);
    if (index > -1) {
      // changing selection value cause scroll in the list
      setSelection(index);
    }
  };

  /*****************************************************/
  /**                   Sort                          **/
  /*****************************************************/
  // create a default prop to handle sort status
  const [sort, setSort] = useState("asc");
  // create a default function to handle input change
  const handleSortClick = (e) => {
    e.preventDefault();
    // Handle filter and other stuff.
    setSort(sort === "asc" ? "des" : "asc");
    handleSort(sort);
  };

  /*****************************************************/
  /**                 Filter                          **/
  /*****************************************************/
  // create a default function to handle filter
  const handleFilterClick = (e) => {
    e.preventDefault();
    // Handle filter and other stuff.
    handleFilter();
  };

  return (
    <StyledList {...props}>
      <div className="card">
        <input
          placeholder={props.placeholder || "Indicate a value to search"}
          value={inputValue}
          onChange={handleInputChanges}
        />
        <FontAwesomeIcon icon={["fa", "search"]} className="searchIcon" />
        <span className="sortIcon" onClick={handleSortClick}>
          <FontAwesomeIcon
            icon={[
              "fa",
              sort === "asc" ? "sort-amount-down" : "sort-amount-up",
            ]}
            className="icon"
          />
        </span>
        <span className="filterIcon" onClick={handleFilterClick}>
          <FontAwesomeIcon icon={["fa", "filter"]} className="icon" />
        </span>
      </div>
      <div className="items">
        <List
          rows={rows}
          rowSize={rowSize}
          rowGutterSize={rowGutterSize}
          className="list"
          width={props.width || 390}
          height={props.height || 440}
          selection={selection}
          setSelection={setSelection}
        />
      </div>
    </StyledList>
  );
};

// Default prop values
SearchList.defaultProps = {
  rows: [<div>...</div>],
  rowSize: 45,
  rowGutterSize: 0,
};

// Expected prop values
SearchList.propTypes = {
  rows: array.isRequired,
  rowSize: number,
  rowGutterSize: number,
};

export default SearchList;
