import React, { useState, useRef } from "react";
import CirclePack from "../d3/CirclePack";

interface TeamSpendingProps {}

const TeamSpending: React.FC<TeamSpendingProps> = () => {
  const [data, setData] = useState<number[]>([25, 30, 45, 60, 20]);
  return (
    <React.Fragment>
      <CirclePack data={data} />
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
