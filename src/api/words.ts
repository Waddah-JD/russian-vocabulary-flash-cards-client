import { Word } from "types/words";

import axios from "./axios";

const path = `/v1/words`;

export async function getWordDetails(id: number): Promise<Word> {
  const { data } = await axios.get<Word>(`${path}/${id}`);
  return data;
}

export async function learnWords(batchSize: number): Promise<Word[]> {
  const { data } = await axios.get<Word[]>(`${path}/learn`, { params: { batchSize } });
  return data;
}
