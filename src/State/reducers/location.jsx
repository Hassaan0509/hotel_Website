import { createReducer } from "@reduxjs/toolkit";

const initialState = { visited: true };

export const locationreducer = createReducer(initialState, {
  changeLocation: (state, action) => {
    state.visited = action.payload;
  },
});
