import { createReducer, isAnyOf } from "@reduxjs/toolkit";
import { signUserOut } from "actions/auth";
import {
  addToCollectionNoteFormValueChanged,
  fetchLearnWords,
  fetchLearnWordsFailed,
  fetchLearnWordsSucceeded,
} from "actions/words";
import { Word } from "types/words";

export type LearnWordsState = {
  batchSize: number;
  isLoading: boolean;
  results: (Word & { note?: string })[];
};

export const initialState: LearnWordsState = {
  batchSize: 10,
  isLoading: false,
  results: [],
};

const reducer = createReducer<LearnWordsState>(initialState, (builder) => {
  builder.addCase(fetchLearnWords, (state) => {
    state.isLoading = true;
    state.results = [];
  });
  builder.addCase(fetchLearnWordsSucceeded, (state, action) => {
    state.isLoading = false;
    state.results = action.payload;
  });
  builder.addCase(addToCollectionNoteFormValueChanged, (state, action) => {
    state.results = state.results.map((it) => {
      if (it.id !== action.payload.id) return it;

      return { ...it, note: action.payload.note };
    });
  });
  builder.addMatcher(isAnyOf(signUserOut, fetchLearnWordsFailed), (state) => {
    state.results = [];
  });
});

export default reducer;
