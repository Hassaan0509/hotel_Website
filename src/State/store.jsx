import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import { mode } from "./reducers/mode.jsx";
import { locationreducer } from "./reducers/location.jsx";
import { dateShow } from "./reducers/openDate.jsx";
import { minPrice } from "./reducers/minPrice.jsx";
import { maxPrice } from "./reducers/maxPrice.jsx";
import { searchOption } from "./reducers/searchOption.jsx";
import { dateReducer } from "./reducers/date.jsx";

const store = configureStore({
  reducer: {
    theme: mode,
    location: locationreducer,
    openDate: dateShow,
    min: minPrice,
    max: maxPrice,
    searchOption: searchOption,
    date:dateReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
