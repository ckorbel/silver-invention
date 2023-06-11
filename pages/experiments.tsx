import React, { useEffect, useState, useCallback } from "react";
import { arc, csvParse, DSVRowArray } from "d3";

interface MousPosition {
  x: number;
  y: number;
}

const width = 960;
const height = 550;
const circleRadius = 30;

const initialMousePosition = { x: width / 2, y: height / 2 };

const url: string =
  "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/acd2b8cecfe51c520622fbaf407ee88b8796bfc6/cssNamedColors.csv";

const Experiments: React.FC = () => {
  const [mousePosition, setMousePosition] =
    useState<MousPosition>(initialMousePosition);
  async function fetchText(): Promise<DSVRowArray<string>> {
    const response = await fetch(url, {
      method: "GET",
    });
    const text = await response.text();
    const data = csvParse(text);
    let message = "";
    message = message + Math.round(text.length / 1024) + "kb\n";
    message = message + data.length + " rows\n";
    message = message + data.columns.length + " columns\n";
    document.body.textContent = message;
    return csvParse(text);
  }

  useEffect(() => {
    fetchText();
  }, []);

  const handleMouseMove = useCallback(
    (event: any) => {
      const { clientX: x, clientY: y } = event;
      setMousePosition({ x, y });
    },
    [setMousePosition]
  );

  return (
    <>
      <svg width={width} height={height} onMouseMove={handleMouseMove}>
        <circle cx={mousePosition.x} cy={mousePosition.y} r={circleRadius} />
      </svg>
    </>
  );
};
export default Experiments;
