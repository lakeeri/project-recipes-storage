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
    deleteInShoppingList(state, action) {
      return state.filter((el) => (el.id !== action.payload));
    },
  },
});

export const { setShoppingList, deleteInShoppingList } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;

export const getShoppingList = () => (dispatch) => {
  axios.get('/api/shoppingList')
    .then((res) => dispatch(setShoppingList(res.data)));
};

export const addShoppingList = (value) => (dispatch) => {
  axios.post('/api/shoppingList', { value })
    .then((res) => dispatch(setShoppingList(res.data)));
};

export const changeShoppingList = (list) => (dispatch) => {
  axios.patch('/api/shoppingList', list)
    .then((res) => dispatch(setShoppingList(res.data)));
};

export const deleteProductShoppingList = (id) => (dispatch) => {
  axios.delete(`/api/shoppingList/${id}`)
    .then(() => dispatch(deleteInShoppingList(id)))
    .catch(console.log);
};
