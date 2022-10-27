import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { changeShoppingList } from '../shoppingListSlice/shoppingListSlice';

const initialState = [];

const middleSlice = createSlice({
  name: 'middleSlice',
  initialState,
  reducers: {
    setMiddleSlice(state, action) {
      return action.payload;
    },
    setOneMiddleSlice(state, action) {
      return action.payload;
    },
    deleteMiddleSlice(state, action) {
      return state.filter((el) => (el.recipeid !== action.payload));
    },
  },
});

export const { setMiddleSlice, setOneMiddleSlice, deleteMiddleSlice } = middleSlice.actions;
export default middleSlice.reducer;

export const getMiddle = () => (dispatch) => {
  axios.get('/api/middle')
    .then((res) => dispatch(setMiddleSlice(res.data)));
};

export const addMiddle = (input) => (dispatch) => {
  axios.post('/api/middle', { input })
    .then((res) => dispatch(setMiddleSlice(res.data)));
};

export const deleteMiddle = (id) => (dispatch) => {
  axios.delete('/api/middle', { data: { id } })
    .then((res) => { dispatch(deleteMiddleSlice(Number(id))); dispatch(changeShoppingList(res.data)); });
};
