import { RootState } from "src/store";

export function selectLearnWordsBatchSize(state: RootState): RootState["learn"]["batchSize"] {
  return state.learn.batchSize;
}

export function selectLearnWordsResults(state: RootState): RootState["learn"]["results"] {
  return state.learn.results;
}
