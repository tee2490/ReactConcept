import React, { useState } from "react";
import Header from "./components/Header";
import Studentlist from "./components/Studentlist";
import './App.css'

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
    <div className="container">
      <Header title="Student list" />
      <main>
        <Studentlist student={student} deleteStudent={deleteStudent} />
      </main>
     </div>
  );
}
