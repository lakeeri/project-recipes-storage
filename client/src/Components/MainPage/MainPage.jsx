import React from 'react';
import { useSelector } from 'react-redux';
import './carousel.scss';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

export default function MainPage() {
  const recipes = useSelector((state) => state.recipes);

  return (

    <div className="wrapper">
      <nav className="lil-nav">
        {recipes.map((el) => (
          <LeftSide key={el.id} item={el} />
        ))}
      </nav>

      <div className="gallery">
        {recipes.map((el) => (
          <RightSide key={el.id} item={el} />
        ))}
      </div>
    </div>

  );
}
