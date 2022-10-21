import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneRecipe } from '../../redux/slices/oneRecipeSlice/oneRecipeSlice';

export default function OneRecipePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const oneRecipe = useSelector((state) => state.oneRecipe);

  console.log(id);
  useEffect(() => {
    dispatch(getOneRecipe(id));
  }, []);

  return (
    <div>
      <h1>{oneRecipe.name}</h1>
    </div>
  );
}
