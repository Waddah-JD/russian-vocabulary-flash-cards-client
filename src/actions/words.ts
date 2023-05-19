import { createAction } from "@reduxjs/toolkit";
import { LearnWordsState } from "reducers/learn";
import { Word } from "types/words";

export const fetchLearnWords = createAction("WORDS/FETCH_LEARN_WORDS", (batchSize: LearnWordsState["batchSize"]) => {
  return { payload: batchSize };
});

export const fetchLearnWordsSucceeded = createAction("WORDS/FETCH_LEARN_WORDS_SUCCEEDED", (results: Word[]) => {
  return { payload: results };
});

export const fetchLearnWordsFailed = createAction("WORDS/FETCH_LEARN_WORDS_FAILED");

export const addToCollectionNoteFormValueChanged = createAction(
  "WORDS/ADD_TO_COLLECTION_NOTE_FORM_VALUE_CHANGED",
  (id: Word["id"], note: string) => {
    return { payload: { id, note } };
  }
);

export const addToCollectionNoteFormValueSubmitted = createAction(
  "WORDS/ADD_TO_COLLECTION_NOTE_FORM_VALUE_SUBMITTED",
  (id: Word["id"], note: string) => {
    return { payload: { id, note } };
  }
);
