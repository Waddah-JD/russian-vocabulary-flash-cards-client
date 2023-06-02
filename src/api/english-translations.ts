import { EnglishTranslation } from "types/words";

import axios from "../axios";

const path = `/v1/english-translations`;

export async function getEnglishTranslationDetails(id: string): Promise<EnglishTranslation> {
  const { data } = await axios.get<EnglishTranslation>(`${path}/${id}`);
  return data;
}

export async function searchEnglishTranslation(searchTerm: string): Promise<{ data: EnglishTranslation[] }> {
  const { data } = await axios.get<{ data: EnglishTranslation[] }>(`${path}/search`, {
    params: { search: searchTerm, page: 1, perPage: 10 },
  });
  return data;
}
