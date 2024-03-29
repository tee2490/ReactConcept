import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [Count, setCount] = useState(0);
  const [Text, setText] = useState("");

  useEffect(() => {
    console.log("1-ทำงานตอนเริ่มต้นครั้งเดียว");
  }, []);

  useEffect(() => {
    console.log("2-ทำงานทุกคร้้งที่มีการเปลี่ยนแปลง state");
  });

  useEffect(() => {
    console.log("3-ทำงานตามการเปลี่ยนแปลงของ state ที่ระบุ");
  }, [Text]);

  function addCount() {
    setCount(Count + 1);
    if (Count >= 5) setText("มีค่าเกิน 5");
  }

  function subtractCount() {
    setCount(Count - 1);
    if (Count <= 0) setText("มีค่าน้อยกว่า 0");
  }

  function resetCount() {
    setCount(0);
    setText("");
  }

  return (
    <div>
      <h1>
        {Count} {Text}
      </h1>
      <button onClick={addCount} type="button" className="btn btn-primary m-1">
        Add
      </button>
      <button
        onClick={resetCount}
        type="button"
        className="btn btn-secondary m-1"
      >
        Reset
      </button>
      <button
        onClick={subtractCount}
        type="button"
        className="btn btn-danger m-1"
      >
        Subtract
      </button>
    </div>
  );
}
