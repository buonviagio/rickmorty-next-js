"use server"

import { ApiResponse } from "@/models/customType";

async function fetchCharacters(page: number, API_URL:string) {
  const response = await fetch(`${API_URL}?page=${page}`);
  const data = (await response.json()) as ApiResponse;
  return data;
}

export {fetchCharacters}