import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

const cookedRecipeSlice = createSlice({
  name: 'cookedRecipeSlice',
  initialState,
  reducers: {
    setCookedRecipes(state, action) {
      return action.payload;
    },
  },
});

export const { setCookedRecipes } = cookedRecipeSlice.actions;
export default cookedRecipeSlice.reducer;

export const getFavoriteProducts = () => (dispatch) => {
  axios.get('/api/cookedRecipes')
    .then((res) => dispatch(setCookedRecipes(res.data)));
};

export const addFavoriteProducts = (id) => (dispatch) => {
  axios.post('/api/cookedRecipes', { id })
    .then((res) => dispatch(setCookedRecipes(res.data)));
};

export const deleteFavoriteProducts = (id) => (dispatch) => {
  axios.delete('/api/cookedRecipes', { data: { id } })
    .then((res) => dispatch(setCookedRecipes(res.data)));
};
