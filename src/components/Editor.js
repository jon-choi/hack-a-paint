import "../styles/editor.scss";

export default function Editor() {
  return (
    <div id="editor">
      <h1>PixelPaint</h1>
      <h2>Enter Dimensions</h2>
      <div id="options">
        <div className="option">
          <input type="number" className="PanelInput" defaultValue="20" />
          <span>Width</span>
        </div>
        <div className="option">
          <input type="number" className="PanelInput" defaultValue="20" />
          <span>Height</span>
        </div>
      </div>
    </div>
  );
}
