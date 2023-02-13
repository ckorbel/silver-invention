export interface Player {
  draft_pick: number;
  draft_round: number;
  draft_year: number;
  first_team_all_pro: number;
  max_year: string;
  name: string;
  original_team: string;
  position: string;
  pro_bowls: number;
  value_for_draft_team: number;
  weighted_career_approximate_value: number;
  years_as_primary_starter: number;
}

interface Filters {
  position: string | null;
  team: string | null;
}

export default function filterPlayers(
  allPlayers: Player[],
  filterObj: Filters
): Player[] {
  const { position, team } = filterObj;
  return allPlayers.filter((player) => {
    if (position !== null && player.position !== position) return false;
    if (team !== null && player.original_team !== team) return false;
    return true;
  });
}
