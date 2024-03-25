/* eslint-disable react/prop-types */
import React from "react";
import './Item.css'

export default function Item(props) {
  const { item, deleteStudent } = props;
  return (
    <>
      <li className={item.gender}>
        {item.id} {item.name}
        <button className="delete" onClick={() => deleteStudent(item.id)}>
          Delete
        </button>
      </li>
    </>
  );
}
