import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFavoriteProducts, deleteFavoriteProducts, getFavoriteProducts } from '../../../redux/slices/favoriteProducts/favoriteProductsSlice';
import './oneFavRes.scss';

export default function OneFavRes({ item }) {
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(getFavoriteProducts());
  }, []);

  return (
    <div className="one-recipe-box">
      <Link to={`/storage/recipe/${item.recipeId}`}>
        <img className="one-gallery__img" src={item.Recipe.image} alt={item.Recipe.name} />
        <p>{item.Recipe.name}</p>
      </Link>
      {/* */}
      {(
        favs.map((el) => el.recipeId).includes(item.Recipe.id)
          ? (
            <i
              className="fa-solid fa-heart fa-2xl"
              onClick={() => dispatch(deleteFavoriteProducts(item.recipeId))}
            />
          )
          : (
            <i
              className="fa-regular fa-heart fa-2xl"
              onClick={() => dispatch(addFavoriteProducts(item.recipeId))}
            />
          )
      )}
    </div>
  );
}
