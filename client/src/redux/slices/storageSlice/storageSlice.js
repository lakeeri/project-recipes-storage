import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

const storageSlice = createSlice({
  name: 'storageSlice',
  initialState,
  reducers: {
    setStorage(state, action) {
      return action.payload;
    },
    addInStorage(state, action) {
      return [...state, action.payload];
    },
  },
});

export const { setStorage, addInStorage } = storageSlice.actions;
export default storageSlice.reducer;

export const getStorage = () => (dispatch) => {
  axios.get('/api/storage')
    .then((res) => dispatch(setStorage(res.data)));
};

export const addProducts = (input) => (dispatch) => {
  console.log(input);
  axios.post('/api/storage', input)
    .then((res) => dispatch(addInStorage(res.data)))
    .catch(console.log);
};
