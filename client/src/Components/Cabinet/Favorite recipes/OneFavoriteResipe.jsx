import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { deletePendingRecipes, getPendingRecipes } from '../../../redux/slices/pendingRecipeSlice/pendingRecipeSlice';
import { addCookedRecipes } from '../../../redux/slices/cookedRecipeSlice/cookedRecipeSlice';
import { deleteProductsCookedRecipes } from '../../../redux/slices/storageSlice/storageSlice';

export default function OneFavoriteResipe({ item }) {
  const dispatch = useDispatch();
  const pend = useSelector((state) => state.pending);

  useEffect(() => {
    dispatch(getPendingRecipes());
  }, []);

  const cookedHandler = () => {
    dispatch(deleteProductsCookedRecipes(item.Recipe.Ingredients));
    dispatch(deletePendingRecipes(item.recipeId));
    dispatch(addCookedRecipes(item.recipeId));
  };

  return (
    <div className="one-recipe-box">
      <Link to={`/storage/recipe/${item.recipeId}`}>
        <img className="one-gallery__img" src={item.Recipe.image} alt={item.Recipe.name} />
        <p className="cooked-name">{item.Recipe.name}</p>
      </Link>
      {(
        pend.map((el) => el.recipeId).includes(item.Recipe.id)
          ? (
            <div className="cooked-box">
              <p className="cooked-done">Готово</p>
              <i className="fa-regular fa-square fa-2xl cooked-icon" onClick={() => cookedHandler()} />
            </div>
          )
          : (
            {}
          )
      )}
    </div>
  );
}
