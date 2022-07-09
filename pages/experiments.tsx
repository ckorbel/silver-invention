import React, { useEffect, useState } from "react";
import { PlayerData } from "../api/playerTypes";
import PieChart from "../highcharts/PieChat";

interface DraftPercentage {
  [key: string]: number;
}

function formatDraftRound(players: PlayerData[]) {
  const proBowlsPerPlayer: DraftPercentage = {};
  const totalProbowls: DraftPercentage = {};
  for (let player of players) {
    const { draft_round, pro_bowls } = player || {};
    if (draft_round in proBowlsPerPlayer) {
      proBowlsPerPlayer[draft_round] += 1;
      totalProbowls[draft_round] += pro_bowls;
    } else {
      proBowlsPerPlayer[draft_round] = 1;
      totalProbowls[draft_round] = pro_bowls;
    }
  }
  return Object.keys(totalProbowls).map((draftRound: string) => {
    return {
      name: draftRound,
      y: totalProbowls[draftRound],
      totalProbowls: totalProbowls[draftRound],
      proBowlsPerPlayer: proBowlsPerPlayer[draftRound],
    };
  });
}

const Experiments: React.FC = ({}) => {
  const [position, setPosition] = useState<string>("QB");
  const [players, setPlayers] = useState<PlayerData[]>([]);
  useEffect(() => {
    async function getDraftPlayers(): Promise<void> {
      const response = await fetch(
        `http://localhost:4000/players?position=QB`,
        {
          method: "GET",
        }
      );

      const players: PlayerData[] = await response.json();
      setPlayers(players);
    }
    getDraftPlayers();
  }, []);

  return (
    <>
      <PieChart
        title="Draft Round as Percent of Pro-Bowls by Position"
        data={formatDraftRound(players)}
      />
    </>
  );
};
export default Experiments;
