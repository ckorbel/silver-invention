import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
// import Cube from "../ThreeViz/Cube";
import WealthViz from "../ThreeViz/WealthViz";

const median = new Array(55).fill(0).map((d, id) => ({ id }));
const bezos = new Array(193).fill(0).map((d, id) => ({ id }));

const VisualContainerStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
`;

const WealthVisualPage: React.FC = () => {
  const [layout, setLayout] = React.useState<"grid" | "spiral">("grid");
  return (
    <div>
      <Navbar />
      <VisualContainerStyled>
        <WealthViz median={median} bezos={bezos} layout={layout} />
      </VisualContainerStyled>
      <div className="controls">
        <strong>Layouts</strong>{" "}
        <button
          onClick={() => setLayout("grid")}
          className={layout === "grid" ? "active" : undefined}
        >
          Grid
        </button>
        <button
          onClick={() => setLayout("spiral")}
          className={layout === "spiral" ? "active" : undefined}
        >
          Spiral
        </button>
      </div>
    </div>
  );
};

export default WealthVisualPage;
