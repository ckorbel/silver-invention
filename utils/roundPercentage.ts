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
