import { createReducer } from "@reduxjs/toolkit";
import { fetchLearnWords, fetchLearnWordsFailed, fetchLearnWordsSucceeded } from "actions/words";
import { Word } from "types/words";

export type LearnWordsState = {
  batchSize: number;
  isLoading: boolean;
  results: Word[];
};

export const initialState: LearnWordsState = {
  batchSize: 10,
  isLoading: false,
  results: [],
};

const reducer = createReducer<LearnWordsState>(initialState, (builder) => {
  builder.addCase(fetchLearnWords, (state) => {
    state.isLoading = true;
  });
  builder.addCase(fetchLearnWordsSucceeded, (state, action) => {
    state.isLoading = false;
    state.results = action.payload;
  });
  builder.addCase(fetchLearnWordsFailed, (state) => {
    state.isLoading = false;
    state.results = [];
  });
});

export default reducer;
