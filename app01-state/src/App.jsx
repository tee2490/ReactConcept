import React, { useState } from "react";
import Header from "./components/Header";
import Studentlist from "./components/Studentlist";
import './App.css'

export default function App() {
  return (
    <div className="container">
      <Header title="Student list" />
      <main>
        <Studentlist />
      </main>
     </div>
  );
}
