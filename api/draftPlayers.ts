import { PlayerData, Position } from "./playerTypes";

async function fetchDraftPlayers(position: Position): Promise<PlayerData[]> {
  const response = await fetch(
    `http://localhost:4000/players?position=${position}`,
    {
      method: "GET",
    }
  );

  return await response.json();
}

export default fetchDraftPlayers;
