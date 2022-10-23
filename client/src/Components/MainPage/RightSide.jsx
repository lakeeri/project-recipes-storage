import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteProducts, deleteFavoriteProducts } from '../../redux/slices/favoriteProducts/favoriteProductsSlice';

export default function RightSide({ item }) {
  const user = useSelector((state) => state.user);
  const favs = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  return (

    <div className="recipe-box">
      <Link to={`/storage/recipe/${item.id}`}>
        <img className="gallery__img" id={`image-${item.id}`} src={item.image} alt={item.name} />
        <p>{item.name}</p>
      </Link>
      {/* */}
      {user.id
      && (
        favs.map((el) => el.recipeId).includes(item.id)
          ? (
            <i
              className="fa-solid fa-heart fa-2xl"
              onClick={() => dispatch(deleteFavoriteProducts(item.id))}
            />
          )
          : (
            <i
              className="fa-regular fa-heart fa-2xl"
              onClick={() => dispatch(addFavoriteProducts(item.id))}
            />
          ))}
    </div>
  );
}
