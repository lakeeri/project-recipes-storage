import React from 'react';
import { useSelector } from 'react-redux';
// import { getFavoriteProducts } from '../../../redux/slices/favoriteProducts/favoriteProductsSlice';
import OneFavoriteResipe from './OneFavoriteResipe';

export default function FavoriteRecipes() {
  const favs = useSelector((state) => state.favorites);

  return (
    favs?.map((el) => (
      <OneFavoriteResipe key={el.id} item={el} />
    ))

  );
}
