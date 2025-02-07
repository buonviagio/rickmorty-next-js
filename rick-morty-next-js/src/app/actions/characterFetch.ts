import { Character } from "@/models/customType";

async function fetchCharacter(page: number, API_URL:string) {
  const response = await fetch(`${API_URL}/${page}`);
  const data = (await response.json()) as Character;
  return data;
}

export {fetchCharacter}