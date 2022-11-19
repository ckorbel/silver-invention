import React, { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import fetchDraftPlayers from "../api/draftPlayers";
import {
  ChartData,
  PlayerData,
  Position,
  SuccessMetric,
} from "../api/playerTypes";
import ControlBoard from "../components/ExperimentComponents/ControlBoard";
import ExperimentSidebar from "../components/ExperimentComponents/ExperimentSidebar";
import PieChart from "../highcharts/PieChat";

interface DraftPercentage {
  [key: string]: number;
}

const ContentStyled = styled.div`
  display: table;
`;

const VisualsContainer = styled.div`
  display: table-cell;
  width: 85%;
  vertical-align: top;
`;

function formatDraftRound(
  players: PlayerData[] | undefined
): ChartData[] | null {
  if (!players) return null;
  const proBowlsPerPlayer: DraftPercentage = {};
  const totalProbowls: DraftPercentage = {};
  for (const player of players) {
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

const Experiments: React.FC = () => {
  const [position, setPosition] = useState<Position>("QB");
  const [successMetric, setSuccessMetric] = // really prettier??
    useState<SuccessMetric>("pro_bowls");

  const { data, error, isLoading } = useQuery(
    ["players", position],
    () => fetchDraftPlayers(position),
    { staleTime: Infinity } // draft data should be unchanged
  );

  if (isLoading) {
    // TODO spinner
    return <p>Loading...</p>;
  }

  if (error) {
    // TODO useful error message
    return <p>Whoops something is not working right</p>;
  }

  return (
    <>
      <ControlBoard
        position={position}
        setPosition={setPosition}
        successMetric={successMetric}
        setSuccessMetric={setSuccessMetric}
      />
      <ContentStyled>
        <ExperimentSidebar />
        <VisualsContainer>
          <PieChart
            title="Draft Round as Percent of Pro-Bowls by Position"
            data={formatDraftRound(data)}
          />
        </VisualsContainer>
      </ContentStyled>
    </>
  );
};
export default Experiments;
