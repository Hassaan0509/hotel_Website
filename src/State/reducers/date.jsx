import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  date: [
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ],
};

export const dateReducer = createReducer(initialState, {
  changeDates: (state, action) => {
    state.date = action.payload;
  },
});
