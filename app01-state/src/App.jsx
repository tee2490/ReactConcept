import React, { useState } from "react";
import './App.css'

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={()=>setCount(count+1)} type="button" className="btn btn-primary m-1">
          Add
        </button>
        <button onClick={()=>setCount(0)} type="button" className="btn btn-primary m-1">
          Reset
        </button>
        <button onClick={()=>setCount(count-1)} type="button" className="btn btn-primary m-1">
          Subtract
        </button>
      </div>
    </div>
  );
}
