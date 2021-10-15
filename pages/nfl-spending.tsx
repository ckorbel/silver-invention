import React, { useState, useRef } from "react";
import CirclePack from "../d3/CirclePack";
import Navbar from "../components/Navbar";
import * as dataset from "../d3/data/2017.json";
import Sidebar from "../components/Sidebar";

interface TeamSpendingProps {
  [key: string]: TeamSpending;
}

interface TeamSpending {
  [key: string]: string;
  QB: string;
  RB: string;
  WR: string;
  TE: string;
  OL: string;
  Offense: string;
  DL: string;
  LB: string;
  S: string;
  CB: string;
  Defense: string;
}

const teams = ["Steelers", "Raiders", "Falcons", "Redskins"];

const TeamSpending: React.FC<TeamSpendingProps> = () => {
  const [data, setData] = useState<TeamSpendingProps>(dataset);
  const [selectedTeam, setSelectedTeam] = useState<string>("Steelers");
  console.log({ data });

  const handleTeamUpdate = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectedTeam(event.target.value);
  };

  const parseToNumber = (spending: { [key: string]: string }): any => {
    const numberArr: Record<string, number | string>[] = [];
    for (let key in spending) {
      if (key !== "Team" && key !== "Offense" && key !== "Defense") {
        const toNumber: number = Number(
          spending[key].replace(/[^0-9.-]+/g, "")
        );
        const spendPrice = {
          spendArea: key,
          amount: toNumber,
        };
        numberArr.push(spendPrice);
      }
    }
    return numberArr;
  };

  return (
    <React.Fragment>
      <Navbar />
      <select value={selectedTeam} onChange={handleTeamUpdate}>
        {dataset &&
          Object.keys(dataset).map((team) => (
            <option key={team} value={team}>
              {team}
            </option>
          ))}
      </select>
      <Sidebar teams={Object.keys(dataset)} />
      <CirclePack
        data={parseToNumber(data[selectedTeam])}
        team={selectedTeam}
      />
      <button onClick={() => console.log(data)}>Update data</button>
    </React.Fragment>
  );
};

export default TeamSpending;
