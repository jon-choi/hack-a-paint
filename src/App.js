import React, { useLayoutEffect, useState } from "react";
import "./App.css";

function App() {
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
