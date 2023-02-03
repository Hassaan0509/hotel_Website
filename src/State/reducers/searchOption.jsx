import { createReducer } from "@reduxjs/toolkit";

const initialState = { searchOption: { adult: 1, children: 0, room: 1 } };

export const searchOption = createReducer(initialState, {
  SET_SEARCH_OPTION: (state, action) => {
    state.searchOption = action.payload;
  },
});
