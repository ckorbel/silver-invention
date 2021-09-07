import React, { useState, useRef } from "react";
import CirclePack from "../d3/CirclePack";
import Navbar from "../components/Navbar";
import { dataset } from "../d3/data";

interface TeamSpendingProps {}

const TeamSpending: React.FC<TeamSpendingProps> = () => {
  const [data, setData] = useState<number[]>(dataset);
  const sortedData = data.sort((a, b) => a - b);

  return (
    <React.Fragment>
      <Navbar />
      <CirclePack data={sortedData} scale="linear" />
      <button onClick={() => setData(data.map((value) => value + 5))}>
        Update data
      </button>
      <button onClick={() => setData(data.filter((value) => value < 35))}>
        Filter data
      </button>
      <button
        onClick={() => setData([...data, Math.round(Math.random() * 100)])}
      >
        Add data
      </button>
    </React.Fragment>
  );
};

export default TeamSpending;
