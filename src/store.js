import { configureStore } from "@reduxjs/toolkit";

import filmTicketReducer from "./redux/slices/filmTicketSlice";

const store = configureStore({
  reducer: {
    filmTicket: filmTicketReducer,
  },
});
export default store;
