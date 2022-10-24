import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { deletePendingRecipes, getPendingRecipes } from '../../../redux/slices/pendingRecipeSlice/pendingRecipeSlice';

export default function OneFavoriteResipe({ item }) {
  const dispatch = useDispatch();
  const pend = useSelector((state) => state.pending);
  console.log(item);

  useEffect(() => {
    dispatch(getPendingRecipes());
  }, []);

  return (
    <div className="one-recipe-box">
      <Link to={`/storage/recipe/${item.recipeId}`}>
        <img className="one-gallery__img" src={item.Recipe.image} alt={item.Recipe.name} />
        <p>{item.Recipe.name}</p>
      </Link>
      {(
        pend.map((el) => el.recipeId).includes(item.Recipe.id)
          ? (
            <AiFillHeart className="heart-fav" onClick={() => dispatch(deletePendingRecipes(item.recipeId))} />
          )
          : (
            {/* <i
              className="fa-regular fa-heart fa-2xl"
              onClick={() => dispatch(addFavoriteProducts(item.recipeId))}
            /> */}
          )
      )}
    </div>
  );
}
