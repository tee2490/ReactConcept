import React from "react";
import "./AddForm.css";

export default function AddForm() {
  return (
    <section className="container">
      <form>
        <label>name</label>
        <input type="text" name="name" />
        <button type="submit" className="btn-add">save</button>
      </form>
    </section>
  );
}
