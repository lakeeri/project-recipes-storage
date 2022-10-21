import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {};

const oneProductSlice = createSlice({
  name: 'oneProductSlice',
  initialState,
  reducers: {
    setOneProduct(state, action) {
      return action.payload;
    },
  },
});

export const { setOneProduct } = oneProductSlice.actions;
export default oneProductSlice.reducer;

export const getOneProduct = (value) => (dispatch) => {
  axios.post('/api/oneProduct', { value })
    .then((res) => dispatch(setOneProduct(res.data)));
};
