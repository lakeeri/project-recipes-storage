import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

const favoriteProductsSlice = createSlice({
  name: 'favoriteProducts',
  initialState,
  reducers: {
    setFavoriteProducts(state, action) {
      return action.payload;
    },
  },
});

export const { setFavoriteProducts } = favoriteProductsSlice.actions;
export default favoriteProductsSlice.reducer;

export const getFavoriteProducts = () => (dispatch) => {
  axios.get('/api/favoriteProducts')
    .then((res) => dispatch(setFavoriteProducts(res.data)));
};

export const addFavoriteProducts = (id) => (dispatch) => {
  axios.post('/api/favoriteProducts', { id })
    .then((res) => dispatch(setFavoriteProducts(res.data)));
};
