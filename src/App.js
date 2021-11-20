import React, { useLayoutEffect, useState } from "react";
import "./App.css";
import rough from "roughjs/bundled/rough.esm";

const generator = rough.generator();

function App() {
  const [elements, setElements] = useState([]);

  const [drawing, setDrawing] = useState(false);

  useLayoutEffect(() => {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    const roughCanvas = rough.canvas(canvas);
    const rect = generator.rectangle(10, 10, 100, 100);
    const line = generator.line(10, 10, 110, 110);

    roughCanvas.draw(rect);
    roughCanvas.draw(line);
  });
  const handleMouseDown = (event) => {
    setDrawing(true);
  };
  const handleMouseMove = (event) => {
    if (!drawing) return;

    const { clientX, clientY } = event;
    console.log(clientX, clientY);
  };
  const handleMouseUp = () => {
    setDrawing(false);
  };
  return (
    <canvas
      id="canvas"
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      Canvas
    </canvas>
  );
}

export default App;
