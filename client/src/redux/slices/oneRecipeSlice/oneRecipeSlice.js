import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {};
const oneRecipesSlice = createSlice({
  name: 'oneRecipesSlice',
  initialState,
  reducers: {
    setOneRecipe(state, action) {
      return action.payload;
    },
  },
});

export const { setOneRecipe } = oneRecipesSlice.actions;
export default oneRecipesSlice.reducer;

export const getOneRecipe = (id) => (dispatch) => {
  axios.post(`/api/recipes/${id}`)
    .then((res) => dispatch(setOneRecipe(res.data)));
};
