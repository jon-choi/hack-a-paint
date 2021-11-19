import React, { useLayoutEffect, useState } from "react";
import "./App.css";

function App() {
  useLayoutEffect(() => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "green";
    ctx.fillRect(10, 10, 150, 100);
  });

  return (
    <canvas
      id="canvas"
      style={{ backgroundColor: "blue" }}
      width={window.innerWidth}
      height={window.innerHeight}
    >
      Canvas
    </canvas>
  );
}

export default App;
