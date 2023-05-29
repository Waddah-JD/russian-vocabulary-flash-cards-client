import { EnglishTranslation } from "types/words";

import axios from "./axios";

const path = `/v1/english-translations`;

export async function getEnglishTranslationDetails(id: number): Promise<EnglishTranslation> {
  const { data } = await axios.get<EnglishTranslation>(`${path}/${id}`);
  return data;
}
