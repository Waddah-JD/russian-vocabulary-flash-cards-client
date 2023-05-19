import { Word } from "types/words";

import axios from "./axios";

const path = `/v1/words`;

export async function learnWords(batchSize: number): Promise<Word[]> {
  const result = await axios.get<Word[]>(`${path}/learn`, { params: { batchSize } });
  return result.data;
}
