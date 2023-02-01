import { configureStore } from "@reduxjs/toolkit";
import { mode } from "./reducers/mode.jsx";
import { locationreducer } from "./reducers/location.jsx";

const store = configureStore({
  reducer: {
    theme: mode,
    location: locationreducer,
  },
});

export default store;
