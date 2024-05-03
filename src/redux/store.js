import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "../redux/contacts/slice.js";
import { filtersReducer } from "../redux/filters/slice.js";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});

export default store;
