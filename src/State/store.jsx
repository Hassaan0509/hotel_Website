import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { mode } from "./reducers/mode.jsx";
import { locationreducer } from "./reducers/location.jsx";
import { dateShow } from "./reducers/openDate.jsx";
import { searchOption } from "./reducers/searchOption.jsx";
import { dateReducer } from "./reducers/date.jsx";
import { maxPrice } from "./reducers/maxPrice.jsx";
import { minPrice } from "./reducers/minPrice.jsx";

const store = configureStore({
  reducer: {
    theme: mode,
    location: locationreducer,
    date: dateReducer,
    max: maxPrice,
    min: minPrice,
    openDate: dateShow,
    searchOption: searchOption,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
