import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getShoppingList } from '../shoppingListSlice/shoppingListSlice';

const initialState = [];

const storageSlice = createSlice({
  name: 'storageSlice',
  initialState,
  reducers: {
    setStorage(state, action) {
      return action.payload;
    },
    deleteInStorage(state, action) {
      return state.filter((el) => (el.id !== action.payload));
    },
  },
});

export const { setStorage, deleteInStorage } = storageSlice.actions;
export default storageSlice.reducer;

export const getStorage = () => (dispatch) => {
  axios.get('/api/storage')
    .then((res) => dispatch(setStorage(res.data)));
};

export const addProducts = (input) => (dispatch) => {
  axios.post('/api/storage', input)
    .then((res) => dispatch(setStorage(res.data)))
    .catch(console.log);
};

export const addProductsList = (input) => (dispatch) => {
  axios.post('/api/storage/list', input)
    .then((res) => dispatch(setStorage(res.data)))
    .catch(console.log);
};

export const deleteProductsList = (input) => (dispatch) => {
  axios.post('/api/storage/list/delete', input)
    .then((res) => { dispatch(setStorage(res.data)); dispatch(getShoppingList()); })
    .catch(console.log);
};

export const deleteProducts = (id) => (dispatch) => {
  axios.delete(`/api/storage/${id}`)
    .then(() => dispatch(deleteInStorage(id)))
    .catch(console.log);
};

export const deleteProductsCookedRecipes = (ingredients) => (dispatch) => {
  axios.post('/api/storage/list/delete/cooked', { ingredients })
    .then((res) => dispatch(setStorage(res.data)));
};
