import React from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import './ingredients.css';

export default function Ingredients() {
  const textAnimation = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  const oneRecipe = useSelector((state) => state.oneRecipe);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      className="Features"
    >
      <div className="ingredients">
        <motion.h3 custom={2} variants={textAnimation} className="ingredients_title">Ингредиенты:</motion.h3>
        <motion.div custom={3} variants={textAnimation} className="ingredients_list">
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
              {' '}
              {unit}
            </p>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
