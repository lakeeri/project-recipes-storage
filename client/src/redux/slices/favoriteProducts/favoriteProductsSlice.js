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

export const deleteFavoriteProducts = (id) => (dispatch) => {
  axios.delete('/api/favoriteProducts', { data: { id } })
    .then((res) => dispatch(setFavoriteProducts(res.data)));
};

export const filterFavourites = (input) => (dispatch) => {
  axios.post('/api/favoriteProducts/filter', { input })
    .then((res) => dispatch(setFavoriteProducts(res.data)));
};

// export const updateFavoriteProducts = (id) => (dispatch) => {
//   axios.put('/api/favoriteProducts', { id })
//     .then((res) => dispatch(setFavoriteProducts(res.data)));
// };
