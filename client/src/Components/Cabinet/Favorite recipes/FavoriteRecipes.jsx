import React from 'react';
import { useSelector } from 'react-redux';
// import { getFavoriteProducts } from '../../../redux/slices/favoriteProducts/favoriteProductsSlice';
// import OneFavoriteResipe from './OneFavoriteResipe';
import OneFavRes from './OneFavRes';
import './oneFavRes.scss';
import './style.css';

export default function FavoriteRecipes() {
  const favs = useSelector((state) => state.favorites);

  return (
    <div className="spisok-fav">
      {favs.length
        ? (
          <div>
            <h3 className="best-food">Лучшие рецепты:</h3>
            <div className="one-gallery">
              {favs?.map((el) => (
                <div className="fav-rec-card">
                  <OneFavRes key={el} item={el} />
                </div>
              ))}
            </div>
            <h3 className="best-food">Сегодня в планах:</h3>
            <div className="one-gallery">
              {favs?.map((el) => (
                <div className="fav-rec-card">
                  <OneFavRes key={el} item={el} />
                </div>
              ))}
            </div>
          </div>
        )
        : <h3 className="fav-rec">Добавьте рецепты в избранное</h3>}
    </div>
  );
}
