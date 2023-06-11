import { ChartData } from "../api/playerTypes";
import PlayerData from "../types/playerData";

export interface DraftRoundPercentage {
  draftRound: number | string;
  totalDraftedPlayers: number;
  percentageOfTotal: number;
}

type PercentMap = {
  [key: number | string]: number;
};

export default function percentPerRound(
  playerData: PlayerData[] | null
): DraftRoundPercentage[] {
  if (!playerData) return [];
  const percentMap: PercentMap = {};
  const totalPlayers: number = playerData.length;

  // create Map
  playerData.forEach(({ draft_round }) => {
    if (draft_round in percentMap) {
      percentMap[draft_round]++;
    } else {
      percentMap[draft_round] = 1;
    }
  });

  const draftRounds: DraftRoundPercentage[] = Object.keys(percentMap).map(
    (draftRound) => {
      return {
        draftRound,
        totalDraftedPlayers: percentMap[draftRound],
        percentageOfTotal: percentMap[draftRound] / totalPlayers,
      };
    }
  );

  // rank from largest to smallest
  return draftRounds.sort(
    (a, b) => b.totalDraftedPlayers - a.totalDraftedPlayers
  );
}

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
