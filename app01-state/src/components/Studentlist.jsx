import React, { useState } from "react";

export default function Studentlist() {
  const [student, setStudent] = useState([
    { id: 1, name: "Student1" },
    { id: 2, name: "Student2" },
    { id: 3, name: "Student3" },
  ]);

  const [show, setShow] = useState(true);

  function deleteStudent(id) {
    setStudent(student.filter((item) => item.id != id));
  }

  return (
    <div>
      <h3>
        All students : {student.length}{" "}
        <button onClick={() => setShow(!show)}>{show ? "ซ่อน" : "แสดง"}</button>
      </h3>
      <ul>
        {show &&
          student.map((item) => (
            <li key={item.id}>
              <p>
                {item.id} {item.name}{" "}
                <button onClick={() => deleteStudent(item.id)}>Delete</button>
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
}
