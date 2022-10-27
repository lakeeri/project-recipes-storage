import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { deleteFavoriteProducts, getFavoriteProducts } from '../../../redux/slices/favoriteProducts/favoriteProductsSlice';
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
        <p className="cooked-name">{item.Recipe.name}</p>
      </Link>
      {(
        favs.map((el) => el.recipeId).includes(item.Recipe.id)
          ? (
            <AiFillHeart className="heart-fav" onClick={() => dispatch(deleteFavoriteProducts(item.recipeId))} />
          )
          : (
            {}
          )
      )}
    </div>
  );
}
