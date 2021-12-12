import React, { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import "./App.css";

function App() {
  const canvasRef = useRef(null);
  const ctx = useRef(null);

  const [selectedColor, setSelectedColor] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);
  const [lastPosition, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (canvasRef.current) {
      ctx.current = canvasRef.current.getContext("2d");
    }
  }, []);

  const draw = useCallback(
    (x, y) => {
      if (mouseDown) {
        ctx.current.beginPath();
        ctx.current.strokeStyle = selectedColor;
        ctx.current.lineWidth = 2;
        ctx.current.lineJoin = "round";
        ctx.current.moveTo(lastPosition.x , lastPosition.y);
        console.log(lastPosition.x, lastPosition.y);
        ctx.current.lineTo(x, y);
        ctx.current.closePath();
        ctx.current.stroke();

        setPosition({
          x,
          y
        });
      }
    },
    [lastPosition, mouseDown, selectedColor, setPosition]
  );

  const onMouseDown = (e) => {
    setPosition({
      x: e.pageX - 200,
      y: e.pageY - 82 
    });
    setMouseDown(true);
  };

  const onMouseUp = (e) => {
    setMouseDown(false);
  };

  const onMouseMove = (e) => {
    draw(e.pageX - 200, e.pageY - 82);
  };


  const createAndDownloadPdf = () => {
    const dataURL = canvasRef.current.toDataURL("image/png", 1.0);
    const state = { name: "Image", image: dataURL };
    
    axios.post("/create-pdf", state)
      .then(() => axios.get("fetch-pdf", { responseType: "blob" }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });

        saveAs(pdfBlob, "newPdf.pdf");
      });
  };
  
  return (
    <div className="App">
      <div className="colors_palette">
        <button
          className="color_shape"
          onClick={(e) => setSelectedColor("red")}
        ></button>
        <button
          className="color_shape"
          onClick={(e) => setSelectedColor("green")}
        ></button>
        <button
          className="color_shape"
          onClick={(e) => setSelectedColor("yellow")}
        ></button>
        <button
          className="color_shape"
          onClick={(e) => setSelectedColor("blue")}
        ></button>
      </div>
      <div className="canvas_cantainer">
      <canvas
        width={780}
        height={380}
        ref={canvasRef}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onMouseMove={onMouseMove}
      />
    </div>
      <button className="download_btn" onClick={createAndDownloadPdf}>
        Download PDF
      </button>
    </div>
  );
}

export default App;
