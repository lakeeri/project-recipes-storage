import React from 'react';
import { useSelector } from 'react-redux';
import OneCookedRecipe from './OneCookedRecipe';

export default function CookedRecipes() {
  const cooked = useSelector((state) => state.cooked);
  return (
    <div className="spisok-fav">

      {cooked.length ? (
        <div>
          <h3 className="best-food">Уже испробовано:</h3>
          <div className="one-gallery">
            {cooked?.map((el) => (
              <div className="fav-rec-card">
                <OneCookedRecipe key={el} item={el} />
              </div>
            ))}
          </div>
        </div>
      )
        : <h3 className="fav-rec">Сегодня в планах:</h3>}
    </div>
  );
}
