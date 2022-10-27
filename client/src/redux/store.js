import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
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
import middleSlice from './slices/middleSlice/middleSlice';
import virtualStorageSlice from './slices/virtualStorageSlice/virtualStorageSlice';

const sagaMiddleware = createSagaMiddleware();

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
    middle: middleSlice,
    virtualSorage: virtualStorageSlice,
  },
  middleware: (mid) => [...mid(), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
