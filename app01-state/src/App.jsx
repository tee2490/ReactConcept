import React, { useState } from "react";
import Header from "./components/Header";
import Studentlist from "./components/Studentlist";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Studentlist />
      </main>
     </>
  );
}
