import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Registration from './Components/Registration/Registration';
import LogIn from './Components/LogIn/LogIn';
import MainPage from './Components/MainPage/MainPage';
import NavBar from './Components/NavBar/NavBar';
import { checkUser } from './redux/slices/userSlice/userSlice';
import { getRecipes } from './redux/slices/recipesSlice/recipesSlice';
import { getProducts } from './redux/slices/productsSlice/productsSlice';
import { getFavoriteProducts } from './redux/slices/favoriteProducts/favoriteProductsSlice';
import CabinetPage from './Components/Cabinet/StoragePage';
import StorageProducts from './Components/Cabinet/Products in storage/StorageProducts';
import FavoriteRecipes from './Components/Cabinet/Favorite recipes/FavoriteRecipes';
import CookedRecipes from './Components/Cabinet/Already cooked/CookedRecipes';
import ShoppingList from './Components/Cabinet/Shopping list/ShoppingList';

import OneRecipePage from './Components/OneRecipePage/OneRecipePage';
import { getStorage } from './redux/slices/storageSlice/storageSlice';
import { getPendingRecipes } from './redux/slices/pendingRecipeSlice/pendingRecipeSlice';
import { getShoppingList } from './redux/slices/shoppingListSlice/shoppingListSlice';
import { getCookedRecipes } from './redux/slices/cookedRecipeSlice/cookedRecipeSlice';
import { getMiddle } from './redux/slices/middleSlice/middleSlice';
import { getIngredientsSlice } from './redux/slices/ingredientsSlice/ingredientsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUser());
    dispatch(getRecipes());
    dispatch(getProducts());
    dispatch(getStorage());
    dispatch(getShoppingList());
    dispatch(getFavoriteProducts());
    dispatch(getPendingRecipes());
    dispatch(getCookedRecipes());
    dispatch(getMiddle());
    dispatch(getIngredientsSlice());
  }, []);

  return (
    <main>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/user/registration" element={<Registration />} />
        <Route path="/user/login" element={<LogIn />} />
        <Route path="/storage" element={<CabinetPage />} />
        <Route path="/storage/products" element={<StorageProducts />} />
        <Route path="/storage/favorites" element={<FavoriteRecipes />} />
        <Route path="/storage/cooked" element={<CookedRecipes />} />
        <Route path="/storage/list" element={<ShoppingList />} />
        <Route path="/storage/recipe/:id" element={<OneRecipePage />} />
      </Routes>
    </main>
  );
}

export default App;
