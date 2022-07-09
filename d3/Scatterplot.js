import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

function Scatterplot({ data }) {
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
  useEffect(() => {}, [data]);

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

export default Scatterplot;
