import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addFavoriteProducts } from '../../redux/slices/favoriteProducts/favoriteProductsSlice';

export default function RightSide({ item }) {
  const dispatch = useDispatch();
  return (

    <div className="recipe-box">
      <Link to={`/storage/recipe/${item.id}`}>
        <img className="gallery__img" id={`image-${item.id}`} src={item.image} alt={item.name} />
        <p>{item.name}</p>
      </Link>
      <i
        className="fa-regular fa-heart fa-2xl"
        onClick={() => dispatch(addFavoriteProducts(item.id))}
      />
    </div>

  );
}
