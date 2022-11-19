export interface PlayerData {
  name: string;
  position: Position;
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

export interface ChartData {
  name: string;
  y: number;
  totalProbowls: number;
  proBowlsPerPlayer: number;
}

export const postitionOptions: Position[] = [
  "QB",
  "LB",
  "WR",
  "DB",
  "RB",
  "DE",
  "DT",
  "NT",
  "FB",
  "G",
  "T",
  "C",
  "K",
  "P",
];

export type Position =
  | "QB"
  | "LB"
  | "WR"
  | "DB"
  | "RB"
  | "DE"
  | "DT"
  | "NT"
  | "FB"
  | "G"
  | "T"
  | "C"
  | "K"
  | "P";

export type SuccessMetric =
  | "pro_bowls"
  | "pro_bowls_per_player"
  | "first_team_all_pro"
  | "years_as_primary_starter"
  | "weighted_career_approximate_value"
  | "value_for_draft_team";
