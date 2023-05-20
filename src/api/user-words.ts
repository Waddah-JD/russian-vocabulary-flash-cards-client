import { PracticeWord, Word } from "types/words";

import axios from "./axios";

const path = `/v1/users-words`;

export async function addWordToUserCollection(id: Word["id"], notes: string | undefined): Promise<void> {
  await axios.post(`${path}/${id}`, { notes });
}

export async function getPracticeWords(batchSize: number): Promise<PracticeWord[]> {
  const { data } = await axios.get<PracticeWord[]>(`${path}/practice`, { params: { batchSize } });
  return data;
}

export async function submitPracticeWordResult(id: Word["id"], successful: boolean | undefined): Promise<void> {
  await axios.put<Word[]>(`${path}/practice/${id}`, { successful });
}
