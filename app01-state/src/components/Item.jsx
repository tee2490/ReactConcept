/* eslint-disable react/prop-types */
import React from "react";

export default function Item(props) {
  const { item, deleteStudent } = props;
  return (
    <>
      <li>
        <p>
          {item.id} {item.name}
          <button className="delete" onClick={() => deleteStudent(item.id)}>
            Delete
          </button>
        </p>
      </li>
    </>
  );
}
