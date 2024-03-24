import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [student, setStudent] = useState([
    { id: 1, name: "Student1" },
    { id: 2, name: "Student2" },
    { id: 3, name: "Student3" },
  ]);

  function deleteStudent(id) {
    setStudent(student.filter((item) => item.id != id));
  }

  return (
    <div>
      <h3>All students : {student.length}</h3>
      <ul>
        {student.map((item) => (
          <li key={item.id}>
            <p>
              {item.id} {item.name}{" "}
              <button
                onClick={() => deleteStudent(item.id)}
                className="btn btn-success"
              >
                Delete
              </button>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
