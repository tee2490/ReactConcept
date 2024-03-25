import React, { useState } from "react";
import "./AddForm.css";

export default function AddForm(props) {
  const { student, setStudent } = props;
  const [name, setName] = useState("");

  function saveStudent(e) {
    e.preventDefault();
    if (!name) {
      alert("กรุณาป้อนข้อมูลด้วยครับ");
    } else {
      const newStudent = {
        id: Math.floor(Math.random() * 1000),
        name: name,
      };
      setStudent([...student,newStudent])
      setName("")
    }
  }

  return (
    <section className="container">
      <form onSubmit={saveStudent}>
        <label>name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="btn-add">
          save
        </button>
      </form>
    </section>
  );
}
