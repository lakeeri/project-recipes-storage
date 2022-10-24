import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice/userSlice';
import recipesSlice from './slices/recipesSlice/recipesSlice';
import productsSlice from './slices/productsSlice/productsSlice';
import storageSlice from './slices/storageSlice/storageSlice';
import oneProductSlice from './slices/oneProductSlice/oneProductSlice';
import oneRecipeSlice from './slices/oneRecipeSlice/oneRecipeSlice';
import favoriteProductsSlice from './slices/favoriteProducts/favoriteProductsSlice';
import modalSlice from './slices/modalSlice/modalSlice';
import shoppingListSlice from './slices/shoppingListSlice/shoppingListSlice';
import pendingRecipeSlice from './slices/pendingRecipeSlice/pendingRecipeSlice';
import cookedRecipeSlice from './slices/cookedRecipeSlice/cookedRecipeSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    recipes: recipesSlice,
    products: productsSlice,
    storage: storageSlice,
    oneProduct: oneProductSlice,
    oneRecipe: oneRecipeSlice,
    favorites: favoriteProductsSlice,
    modal: modalSlice,
    shoppingList: shoppingListSlice,
    pending: pendingRecipeSlice,
    cooked: cookedRecipeSlice,
  },
});

export default store;
