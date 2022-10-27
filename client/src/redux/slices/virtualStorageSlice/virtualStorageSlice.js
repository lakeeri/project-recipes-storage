import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// import { getShoppingList } from '../shoppingListSlice/shoppingListSlice';

const initialState = [];

const virtualStorageSlice = createSlice({
  name: 'virtualStorageSlice',
  initialState,
  reducers: {
    setVirtualStorage(state, action) {
      return action.payload;
    },
    deleteInVirtualStorage(state, action) {
      return state.filter((el) => (el.id !== action.payload));
    },
  },
});

export const { setVirtualStorage, deleteInVirtualStorage } = virtualStorageSlice.actions;
export default virtualStorageSlice.reducer;

export const getVirtualStorage = () => (dispatch) => {
  axios.get('/api/virtualstorage')
    .then((res) => dispatch(setVirtualStorage(res.data)));
};

export const addVirtualProducts = (input) => (dispatch) => {
  axios.post('/api/virtualstorage', input)
    .then((res) => dispatch(setVirtualStorage(res.data)))
    .catch(console.log);
};

export const addVirtualProductsList = (input) => (dispatch) => {
  axios.post('/api/virtualstorage/list', input)
    .then((res) => dispatch(setVirtualStorage(res.data)))
    .catch(console.log);
};

export const changeVirtualStorage = (input) => (dispatch) => {
  axios.patch('/api/virtualstorage/list', input)
    .then((res) => dispatch(setVirtualStorage(res.data)))
    .catch(console.log);
};

export const deleteVirtualProductsCooked = (ingredients) => (dispatch) => {
  axios.post('/api/virtualstorage/list/delete/cooked', { ingredients })
    .then((res) => dispatch(setVirtualStorage(res.data)));
};
