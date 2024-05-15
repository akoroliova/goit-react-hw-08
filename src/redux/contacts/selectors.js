import { createSelector } from "@reduxjs/toolkit";
import { selectFilterInput } from "../filters/selectors.js";

export const selectContactsArray = (state) => {
  return state.contacts.items;
};

export const selectVisibleContacts = createSelector(
  [selectContactsArray, selectFilterInput],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const selectLoading = (state) => state.contacts.loading;
