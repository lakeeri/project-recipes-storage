import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

const shoppingListSlice = createSlice({
  name: 'shoppingListSlice',
  initialState,
  reducers: {
    setShoppingList(state, action) {
      return action.payload;
    },
  },
});

export const { setShoppingList } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;

export const getShoppingList = () => (dispatch) => {
  axios.get('/api/shoppinglist')
    .then((res) => dispatch(setShoppingList(res.data)));
};
