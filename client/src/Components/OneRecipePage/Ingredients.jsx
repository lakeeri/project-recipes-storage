import React from 'react';
import { useSelector } from 'react-redux';
import './ingredients.css';

export default function Ingredients() {
  const oneRecipe = useSelector((state) => state.oneRecipe);
  console.log(oneRecipe.Ingredients);

  return (
    <div className="ingredients">
      <h3 className="ingredients_title">Ингредиенты:</h3>
      <div className="ingredients_list">
        {oneRecipe.Ingredients?.map(({
          name, weight, unit,
        }) => (
          <p
            key={`${name}${weight}${unit}`}
            className="ingredients_list-item"
          >
            {name}
            {' '}
            -
            {' '}
            {weight}
            {unit}
          </p>
        ))}
      </div>
    </div>
  );
}
