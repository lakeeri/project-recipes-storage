import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];
const recipesSlice = createSlice({
  name: 'recipesSlice',
  initialState,
  reducers: {
    setRecipes(state, action) {
      return action.payload;
    },
  },
});

export const { setRecipes } = recipesSlice.actions;
export default recipesSlice.reducer;

export const getRecipes = () => (dispatch) => {
  axios.get('/api/recipes')
    .then((res) => dispatch(setRecipes(res.data)));
};

export const filterRecipes = (input) => (dispatch) => {
  axios.post('/api/recipes', { input })
    .then((res) => dispatch(setRecipes(res.data)));
};
