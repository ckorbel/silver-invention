import React from "react";
import Navbar from "../components/Navbar";
import Cube from "../ThreeViz/Cube";

const WealthVisualPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Cube />
      </div>
    </div>
  );
};

export default WealthVisualPage;
