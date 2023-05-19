import { Word } from "types/words";

import axios from "./axios";

const path = `/v1/users-words`;

export async function addWordToUserCollection(id: Word["id"], note: string): Promise<void> {
  await axios.post<Word[]>(`${path}/${id}`, { note });
}
