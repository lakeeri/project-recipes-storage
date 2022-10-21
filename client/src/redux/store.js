import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice/userSlice';
import recipesSlice from './slices/recipesSlice/recipesSlice';
import oneRecipeSlice from './slices/oneRecipeSlice/oneRecipeSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    recipes: recipesSlice,
    oneRecipe: oneRecipeSlice,
  },
});

export default store;
