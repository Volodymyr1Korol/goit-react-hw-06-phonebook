import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],

};
export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    createItem(state, action) {
      state.items = [...state.items, action.payload];
    },

    deleteItems(state, action) {
      state.items = state.items.filter(el => el.id !== action.payload);
    },

     },
});

export const { createItem, deleteItems } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;