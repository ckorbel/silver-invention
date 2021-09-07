import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import ResizeObserver from "resize-observer-polyfill";
import { dataset } from "./data";
const scale = "quantile";

function CirclePack({ data, scale }) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  // const dimensions = useResizeObserver(wrapperRef);
  const dimensions = {
    width: 600,
    height: 150,
  };

  const box = 30;
  dimensions.ctrWidth = dimensions.width - dimensions.margins * 2;
  dimensions.ctrHeight = dimensions.height - dimensions.margins * 2;

  // will be called initially and on every data change
  useEffect(() => {
    console.log({ data });
    const svg = d3
      .select(svgRef.current)
      .append("svg")
      .attr("width", dimensions.width)
      .attr("height", dimensions.height);

    // Scales
    let colorScale;
    if (scale === "linear") {
      colorScale = d3
        .scaleLinear()
        .domain(d3.extent(data))
        .range(["white", "red"]);
    } else if (scale === "quantize") {
      colorScale = d3
        .scaleQuantize()
        .domain(d3.extent(data))
        .range(["white", "pink", "red"]);
    } else if (scale === "quantile") {
      colorScale = d3
        .scaleQuantile()
        .domain(data)
        .range(["white", "pink", "red"]);

      console.log("Quantize:", colorScale.quantiles());
    } else if (scale === "threshold") {
      // the threshold for upper class vs middle class
      colorScale = d3
        .scaleThreshold()
        .domain([45200, 135600])
        .range(d3.schemeOranges[3]);
    }
    // draw rectangles
    svg
      .append("g")
      .attr("transform", "translate(2, 2)")
      .attr("stroke", "black")
      .attr("fill", "#ddd")
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("width", box - 3)
      .attr("height", box - 3)
      .attr("x", (d, i) => box * (i % 20))
      .attr("y", (d, i) => box * ((i / 20) | 0))
      .attr("fill", (d) => colorScale(d));
  }, [data]);

  return (
    <div
      ref={wrapperRef}
      style={{ marginBottom: "2rem", border: "1px solid red" }}
    >
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default CirclePack;
