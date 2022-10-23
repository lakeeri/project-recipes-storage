import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteProducts } from '../../../redux/slices/favoriteProducts/favoriteProductsSlice';

export default function FavoriteRecipes() {
  const favs = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoriteProducts());
  }, []);
  return (
    favs?.map((el) => (
      <div key={el.id} className="fav-container">
        <div>
          <img src={el.Recipe.image} alt="..." />
        </div>
        <div>
          <p>{el.Recipe.name}</p>
        </div>
      </div>
    ))

  );
}
