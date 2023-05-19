import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "src/store";
import { Word } from "types/words";

function selectSelf(state: RootState): RootState {
  return state;
}

const selectLearn = createSelector(selectSelf, (state) => state.learn);
export const selectLearnBatchSize = createSelector(selectLearn, (state) => state.batchSize);
export const selectLearnWordsResults = createSelector(selectLearn, (state) => state.results);
export const selectWordNotes = createSelector(
  [
    selectLearnWordsResults,
    function (_, wordId: Word["id"]): Word["id"] {
      return wordId;
    },
  ],
  (results, wordId) => results.find((it) => it.id === wordId)?.note
);
