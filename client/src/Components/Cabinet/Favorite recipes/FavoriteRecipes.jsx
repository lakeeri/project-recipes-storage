import React from 'react';
import { useSelector } from 'react-redux';
// import { getFavoriteProducts } from '../../../redux/slices/favoriteProducts/favoriteProductsSlice';
// import OneFavoriteResipe from './OneFavoriteResipe';
import OneFavRes from './OneFavRes';
import './oneFavRes.scss';

export default function FavoriteRecipes() {
  const favs = useSelector((state) => state.favorites);

  return (
    <div className="spisok-fav">
      <div className="one-gallery">
        {favs.length ? favs?.map((el) => (
          <div className="fav-rec-card">
            <OneFavRes key={el} item={el} />
          </div>
        ))
          : <h3 className="fav-rec">Добавьте рецепты в избранное</h3>}
      </div>
    </div>
  );
}
