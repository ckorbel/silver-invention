import { PlayerData, Position } from "./playerTypes";

const baseUrl = "http://localhost:4000";

// just get the whole DB
async function fetchAllPlayers(): Promise<PlayerData[]> {
  const response = await fetch(`${baseUrl}/players`, {
    method: "GET",
  });

  const players = await response.json();
  return players;
}

async function fetchAllDraftPicksForSpecificTeam(
  team: string
): Promise<PlayerData[]> {
  const response = await fetch(`${baseUrl}/teams?team=${team}`, {
    method: "GET",
  });

  return await response.json();
}

export { fetchAllPlayers, fetchAllDraftPicksForSpecificTeam };
