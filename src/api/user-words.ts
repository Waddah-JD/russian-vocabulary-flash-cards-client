import { Word } from "types/words";

import axios from "./axios";

const path = `/v1/users-words`;

export async function addWordToUserCollection(id: Word["id"], notes: string | undefined): Promise<void> {
  await axios.post<Word[]>(`${path}/${id}`, { notes });
}
