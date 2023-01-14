export default interface PlayerData {
  name: string;
  position: string; //todo make more specific enum
  original_team: string; //todo make more
  draft_year: number;
  draft_round: number;
  draft_pick: number;
  first_team_all_pro: number;
  max_year: string;
  pro_bowls: number;
  value_for_draft_team: number;
  weighted_career_approximate_value: number;
  years_as_primary_starter: number;
}
