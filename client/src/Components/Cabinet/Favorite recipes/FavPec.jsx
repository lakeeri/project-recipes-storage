import React from 'react';
import { useSelector } from 'react-redux';
import OneFavRes from './OneFavRes';
import './style.css';

export default function FavPec() {
  const favs = useSelector((state) => state.favorites);

  return (
    <div className="lala">
      {favs.length
        ? (
          <h3>lalalala</h3>
        )
        && (

          <OneFavRes />

        )
        : <h3 className="fav-rec">Добавьте рецепты в избранное</h3>}

    </div>
  );
}
