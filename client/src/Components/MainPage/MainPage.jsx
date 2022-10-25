import React from 'react';
import { useSelector } from 'react-redux';
import './carousel.scss';
import { motion } from 'framer-motion';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

export default function MainPage() {
  const recipes = useSelector((state) => state.recipes);

  return (

    <motion.div
      className="wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
    </motion.div>

  );
}
