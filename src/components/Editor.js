import React, { useState } from "react";
import { CirclePicker } from "react-color";
import DrawingPanel from "./DrawingPanel";
import "../styles/editor.scss";
import Header from "./Header";
import Footer from "./Footer";

export default function Editor() {
  const [panelWidth, setPanelWidth] = useState(16);
  const [panelHeight, setPanelHeight] = useState(16);
  const [hideOptions, setHideOptions] = useState(false);
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
  const [buttonText, setButtonText] = useState("start drawing");
  const [selectedColor, setColor] = useState("#f44336");

  function initializeDrawingPanel() {
    setHideOptions(!hideOptions);
    setHideDrawingPanel(!hideDrawingPanel);

    buttonText === "start drawing"
      ? setButtonText("reset")
      : setButtonText("start drawing");
  }

  function changeColor(color) {
    setColor(color.hex);
  }

  return (
    <div>
      <Header />
      <div id="editor">
        <h1>Welcome to Pixa-Paint!</h1>
        {hideDrawingPanel && <h2>Enter dimensions to get started</h2>}
        {hideDrawingPanel && (
          <div id="options">
            <div className="option">
              <input
                type="number"
                className="panelInput"
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
                className="panelInput"
                defaultValue={panelHeight}
                onChange={(e) => {
                  setPanelHeight(e.target.value);
                }}
              />
              <span>Height</span>
            </div>
          </div>
        )}
        <button onClick={initializeDrawingPanel} className="button">
          {buttonText}
        </button>

        {hideOptions && (
          <CirclePicker color={selectedColor} onChangeComplete={changeColor} />
        )}

        {hideOptions && (
          <DrawingPanel
            width={panelWidth}
            height={panelHeight}
            selectedColor={selectedColor}
          />
        )}
      </div>

      <Footer />
    </div>
  );
}
