import React, { useState } from "react";
import "./Studentlist.css";
import Item from "./Item";

export default function Studentlist(props) {
  const { student, deleteStudent } = props;
  const [show, setShow] = useState(true);

  return (
    <div>
      <ul>
        <div className="header">
          <h3>All students : {student.length}</h3>
          <button onClick={() => setShow(!show)}>
            {show ? "hidden" : "show"}
          </button>
        </div>
        {show &&
          student.map((item) => (
            <Item key={item.id} item={item} deleteStudent={deleteStudent} />
          ))}
      </ul>
    </div>
  );
}
