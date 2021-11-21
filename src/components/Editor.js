import React, { useState } from "react";

import "../styles/editor.scss";

export default function Editor() {
  const [panelWidth, setPanelWidth] = useState(16);
  const [panelHeight, setPanelHeight] = useState(16);
  const [hideOptions, setHideOptions] = useState(false);
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
  const [buttonText, setButtonText] = useState("start drawing");
  const [selectedColor, setSelectedColor] = useState("#f44336");

  return (
    <div id="editor">
      <h1>PixelPaint</h1>
      <h2>Enter Dimensions</h2>
      <div id="options">
        <div className="option">
          <input
            type="number"
            className="PanelInput"
            defaultValue={panelWidth}
            onChange={(e) => {
              setPanelWidth(e.target.value);
            }}
          />
          <span>Width</span>
        </div>
        <div className="option">
          <input
            type="number"
            className="PanelInput"
            defaultValue={panelHeight}
            onChange={(e) => {
              setPanelHeight(e.target.value);
            }}
          />
          <span>Height</span>
        </div>
      </div>
      <button className="button">{buttonText}</button>
    </div>
  );
}
