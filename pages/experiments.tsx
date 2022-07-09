import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import PieChart from "../highcharts/PieChat";

interface PlayerData {
  name: string;
  position: string;
  original_team: string;
  draft_year: number;
  draft_round: number;
  draft_pick: number;
  max_year: string;
  first_team_all_pro: number;
  pro_bowls: number;
  years_as_primary_starter: number;
  weighted_career_approximate_value: number;
  value_for_draft_team: number;
}

const Experiments: React.FC = ({}) => {
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
      console.log({ players });
      setPlayers(players);
    }
    getDraftPlayers();
  }, []);
  return (
    <>
      <PieChart />
    </>
  );
};
export default Experiments;
