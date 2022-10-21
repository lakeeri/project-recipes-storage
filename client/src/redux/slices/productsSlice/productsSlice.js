import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

const productsSlice = createSlice({
  name: 'productsSlice',
  initialState,
  reducers: {
    setProducts(state, action) {
      return action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;

export const getProducts = () => (dispatch) => {
  axios.get('/api/products')
    .then((res) => dispatch(setProducts(res.data)));
};
