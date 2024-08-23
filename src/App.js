import React from "react";

function GradientApp() {
  const [colors, setColors] = React.useState(["#FFD500", "#FF0040"]);

  const colorStops = colors.join(", ");
  const backgroundImage = `linear-gradient(${colorStops})`;

  const addColor = () => {
    setColors([...colors, "#FFFFFF"]);
  };

  const removeColor = () => {
    if (colors.length > 1) {
      setColors(colors.slice(0, -1));
    }
  };

  const handleColorChange = (index, newColor) => {
    const updatedColors = colors.map((color, i) =>
      i === index ? newColor : color
    );
    setColors(updatedColors);
  };

  return (
    <div className="gradient-container">
      <div className="controls">
        <button className="control-btn" onClick={removeColor}>
          Remove Color
        </button>
        <button className="control-btn" onClick={addColor}>
          Add Color
        </button>
      </div>
      <div className="preview" style={{ backgroundImage }} />
      <div className="color-controls">
        {colors.map((color, index) => (
          <div key={`color-${index}`} className="color-box">
            <label htmlFor={`color-${index}`} className="color-title">
              Color {index + 1}:
            </label>
            <input
              id={`color-${index}`}
              className="color-picker"
              type="color"
              value={color}
              onChange={(e) => handleColorChange(index, e.target.value)}
            />
          </div>
        ))}
      </div>
      <div className="output-section">
        <div>Expected output</div>
        <video src="gradient-tool-demo.mp4" autoPlay controls />
      </div>

      <style jsx>{`
        .gradient-container {
          max-width: 550px;
          margin: 0 auto;
          padding: 25px;
          font-family: Helvetica, sans-serif;
          background-color: #fafafa;
          border-radius: 10px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        }

        .controls {
          display: flex;
          justify-content: space-around;
          margin-bottom: 25px;
        }

        .control-btn {
          padding: 12px 24px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          border: 1px solid #bbb;
          border-radius: 5px;
          background-color: #e7e7e7;
          transition: background-color 0.3s;
        }

        .control-btn:hover {
          background-color: #d5d5d5;
        }

        .preview {
          height: 180px;
          width: 100%;
          border: 2px solid #ddd;
          border-radius: 10px;
          margin-bottom: 25px;
        }

        .color-controls {
          display: flex;
          justify-content: space-between;
        }

        .color-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          flex: 1;
        }

        .color-title {
          font-size: 14px;
          margin-bottom: 8px;
        }

        .color-picker {
          width: 55px;
          height: 55px;
          border: 2px solid #ddd;
          border-radius: 10px;
          cursor: pointer;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        }

        .output-section {
          margin-top: 4rem;
          text-align: center;
        }

        .output-section video {
          max-width: 100%;
          border-radius: 10px;
          box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  );
}

export default GradientApp;
