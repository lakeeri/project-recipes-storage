import React from 'react';
import { Link } from 'react-router-dom';
import '../Favorite recipes/oneFavRes.scss';

export default function OneFavoriteResipe({ item }) {
  return (
    <div className="one-recipe-box">
      <Link to={`/storage/recipe/${item.recipeId}`}>
        <img className="one-gallery__img" src={item.Recipe.image} alt={item.Recipe.name} />
        <p className="cooked-name">{item.Recipe.name}</p>
      </Link>
    </div>
  );
}
