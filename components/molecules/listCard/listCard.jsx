import React, { useState } from "react";
import { func, number, node, string, array } from "prop-types";

import StyledList from "./listCard.styles";
import List from "../../atom/list/list";

import "./list2.css";

const ListCard = ({
  title,
  subTitle,
  buttonTitle,
  image,
  titleList,
  btnTitle,
  handleClick,
  rows,
  rowSize,
  rowGutterSize,
  ...props
}) => {
  //** Used to scroll the list to custom index */
  const [selection, setSelection] = useState(null);
  return (
    <StyledList {...props}>
      <div className="card">
        {image && <img src={image} className="image" />}
        <div className="title">
          <p>{subTitle}</p>
          <button className="btn-darkBlue" onClick={handleClick}>
            {btnTitle}
          </button>
        </div>
      </div>
      <div className="items">
        <span>{titleList}</span>
        <List
          rows={rows}
          rowSize={rowSize}
          rowGutterSize={rowGutterSize}
          className="list2"
          width={props.width || 390}
          height={props.height || 180}
          selection={selection}
          setSelection={setSelection}
        />
      </div>
    </StyledList>
  );
};

// Expected prop values
ListCard.propTypes = {
  title: string,
  subTitle: string,
  buttonTitle: string,
  image: node,
  titleList: string,
  customAction: func,
  rows: array.isRequired,
  rowSize: number.isRequired,
};

export default ListCard;
