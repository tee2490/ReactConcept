import React, { useState } from "react";
import Header from "./components/Header";
import Studentlist from "./components/Studentlist";
import './App.css'

export default function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Studentlist />
      </main>
     </div>
  );
}
