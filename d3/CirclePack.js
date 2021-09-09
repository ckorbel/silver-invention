import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import ResizeObserver from "resize-observer-polyfill";
import { dataset } from "./data";

const scales = [
  "QB",
  "RB",
  "WR",
  "TE",
  "OL",
  "Offense",
  "DL",
  "LB",
  "S",
  "CB",
  "Defense",
];

function CirclePack({ data, team }) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  // const dimensions = useResizeObserver(wrapperRef);
  const dimensions = {
    width: 500,
    height: 500,
  };

  const box = 30;
  dimensions.ctrWidth = dimensions.width - dimensions.margins * 2;
  dimensions.ctrHeight = dimensions.height - dimensions.margins * 2;

  const radiusAcessor = (data) => data.amount;

  // will be called initially and on every data change
  useEffect(() => {
    console.log({ data });
    const svg = d3
      .select(wrapperRef.current)
      .append("svg")
      .attr("width", dimensions.width)
      .attr("height", dimensions.height);

    const color = d3
      .scaleOrdinal()
      .domain(["QB", "RB", "WR", "TE", "OL", "DL", "LB", "S", "CB"])
      .range(d3.schemeSet1);

    // Size scale for spending categories
    // const size = d3
    //   .scaleLinear()
    //   .domain(d3.extent(data, radiusAcessor))
    //   .range([10, 100]); // circle will be between 7 and 55 px wide

    const size = d3.scaleLinear().domain([2913937, 100426870]).range([15, 250]);

    // create a tooltip
    const Tooltip = d3
      .select(wrapperRef.current)
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px");

    // Three function that change the tooltip when user hover / move / leave a cell
    const mouseover = function (d) {
      Tooltip.style("opacity", 1);
    };
    const mousemove = function (d) {
      Tooltip.html(
        "<u>" + d.spendArea + "</u>" + "<br>" + d.amount + " inhabitants"
      )
        .style("left", d3.pointer(this)[0] + 20 + "px")
        .style("top", d3.pointer(this)[1] + "px");
    };
    const mouseleave = function (d) {
      Tooltip.style("opacity", 0);
    };

    const node = svg
      .append("g")
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "node")
      .attr("r", (d) => size(d.amount))
      .attr("cx", dimensions.width / 2)
      .attr("cy", dimensions.height / 2)
      .style("fill", (d) => color(d.spendArea))
      .style("fill-opacity", 0.8)
      .attr("stroke", "black")
      .style("stroke-width", 1)
      .on("mouseover", mouseover) // What to do when hovered
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave);

    // Features of the forces applied to the nodes:
    const simulation = d3
      .forceSimulation()
      .force(
        "center",
        d3
          .forceCenter()
          .x(dimensions.width / 2)
          .y(dimensions.height / 2)
      ) // Attraction to the center of the svg area
      .force("charge", d3.forceManyBody().strength(0.1)) // Nodes are attracted one each other of value is > 0
      .force(
        "collide",
        d3
          .forceCollide()
          .strength(0.2)
          .radius(function (d) {
            return size(d.amount) + 3;
          })
          .iterations(1)
      ); // Force that avoids circle overlapping

    // Apply these forces to the nodes and update their positions.
    // Once the force algorithm is happy with positions ('alpha' value is low enough), simulations will stop.
    simulation.nodes(data).on("tick", function (d) {
      node
        .attr("cx", function (d) {
          return d.x;
        })
        .attr("cy", function (d) {
          return d.y;
        });
    });
  }, [data]);

  return (
    <div
      ref={wrapperRef}
      style={{
        marginBottom: "2rem",
        border: "1px solid red",
        height: dimensions.height,
        width: dimensions.width,
      }}
    ></div>
  );
}

export default CirclePack;
