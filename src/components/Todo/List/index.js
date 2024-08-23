import "../style.css";
import React from "react";

const List = (props) => {
  return (
    <>
      {props.isEmpty ? (
        <p>The list is empty</p>
      ) : (
        <>
          <ul className="list-container">
            {props.children}
          </ul>
          {props.isAllDone ? <p>All tasks are completed</p> : null}
        </>
      )}
    </>
  );
};

export default List;
