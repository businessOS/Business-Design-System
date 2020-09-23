import React, { useRef, useState, useEffect } from "react";
import { array, func, number } from "prop-types";
import { FixedSizeList } from "react-window";

import StyledList from "./list.styles";
import "./list.css";

const List = ({ rows, rowSize, rowGutterSize, className, selection, setSelection, ...props }) => {
  // create a list ref, this ref is used to get at the method `scrollToItem`
  // https://react-window.now.sh/#/examples/list/scroll-to-item
  const listRef = useRef(null);

  // an event handler that handles when a key has been pressed while the container is focused
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault(); // prevent default to prevent unwanted scrolling
      if (selection === null) {
        setSelection(0);
      } else {
        // uses `Math.min` to ensure the selection does not go out of bounds
        setSelection(Math.min(rows.length - 1, selection + 1));
      }
    }

    if (e.key === "PageDown") {
      e.preventDefault(); // prevent default to prevent unwanted scrolling
      if (selection === null) {
        setSelection(0);
      } else {
        // uses `Math.min` to ensure the selection does not go out of bounds
        setSelection(Math.min(rows.length - 5, selection + 5));
      }
    }

    if (e.key === "ArrowUp") {
      e.preventDefault(); // prevent default to prevent unwanted scrolling
      if (selection === null) {
        setSelection(0);
      } else {
        // uses `Math.max` to ensure the selection does not go out of bounds
        setSelection(Math.max(0, selection - 1));
      }
    }

    if (e.key === "PageUp") {
      e.preventDefault(); // prevent default to prevent unwanted scrolling
      if (selection === null) {
        setSelection(0);
      } else {
        // uses `Math.max` to ensure the selection does not go out of bounds
        setSelection(Math.max(0, selection - 5));
      }
    }
  };

  // event handler that clears the selection on blur
  const handleBlur = () => {
    setSelection(null);
  };

  // NOTE: this block is important stuff!
  // an effect that watches the `selection` state and calls `list.scrolToItem`
  useEffect(() => {
    // ensure list reference is there
    const list = listRef.current;
    if (!list) return;

    // ensure selection is not null
    if (selection === null) return;

    list.scrollToItem(selection);
  }, [selection]);

  return (
    <div className="app">
      {/* Containing div to add a `tabIndex` and `onKeyDown` and `onBlur` events to */}
      <div
        className="container"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
      >
        <FixedSizeList
          className={className || "list"}
          itemCount={rows.length}
          itemSize={rowSize}
          width={props.width || 300}
          height={props.height || 200}
          ref={listRef}
        >
          {({ index, style }) => {
            const row = rows[index];
            return (
              <div
                className={index === selection ? "active" : "listItem"}
                style={{
                  ...style,
                  left: style.left,
                  top: style.top + rowGutterSize,
                  width: style.width,
                  height: style.height - rowGutterSize,
                }}
                onClick={() => setSelection(index)}
              >
                {row}
              </div>
            );
          }}
        </FixedSizeList>
      </div>
    </div>
  );
};

List.defaultProps = {
  rows: [<div>...</div>],
  rowSize: 45,
  rowGutterSize: 0,
};

// Expected prop values
List.propTypes = {
  rows: array.isRequired,
  rowSize: number,
  rowGutterSize: number,
};

export default List;
