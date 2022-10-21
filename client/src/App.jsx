import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Registration from './Components/Registration/Registration';
import LogIn from './Components/LogIn/LogIn';
import MainPage from './Components/MainPage/MainPage';
import NavBar from './Components/NavBar/NavBar';
import { checkUser } from './redux/slices/userSlice/userSlice';
import CabinetPage from './Components/Cabinet/StoragePage';
import StorageProducts from './Components/Cabinet/Products in storage/StorageProducts';
import FavoriteRecipes from './Components/Cabinet/Favorite recipes/FavoriteRecipes';
import CookedRecipes from './Components/Cabinet/Already cooked/CookedRecipes';
import ShoppingList from './Components/Cabinet/Shopping list/ShoppingList';
import { getRecipes } from './redux/slices/recipesSlice/recipesSlice';
import { getProducts } from './redux/slices/productsSlice/productsSlice';
import OneRecipePage from './Components/OneRecipePage/OneRecipePage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUser());
    dispatch(getRecipes());
    dispatch(getProducts());
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
