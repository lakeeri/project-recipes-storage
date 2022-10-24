import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

const pendingRecipeSlice = createSlice({
  name: 'favoriteProducts',
  initialState,
  reducers: {
    setPendingRecipes(state, action) {
      return action.payload;
    },
  },
});

export const { setPendingRecipes } = pendingRecipeSlice.actions;
export default pendingRecipeSlice.reducer;

export const getPendingRecipes = () => (dispatch) => {
  axios.get('/api/pendingRecipes')
    .then((res) => dispatch(setPendingRecipes(res.data)));
};

export const addPendingRecipes = (id) => (dispatch) => {
  axios.post('/api/pendingRecipes', { id })
    .then((res) => dispatch(setPendingRecipes(res.data)));
};

export const deletePendingRecipes = (id) => (dispatch) => {
  axios.delete('/api/pendingRecipes', { data: { id } })
    .then((res) => dispatch(setPendingRecipes(res.data)));
};

// export const updateFavoriteProducts = (id) => (dispatch) => {
//   axios.put('/api/favoriteProducts', { id })
//     .then((res) => dispatch(setPendingRecipes(res.data)));
// };
