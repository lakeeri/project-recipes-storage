import React, { useEffect } from 'react';
// import { Col, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneRecipe } from '../../redux/slices/oneRecipeSlice/oneRecipeSlice';
import ClockIcon from './ClockIcons';
import Ingredients from './Ingredients';
// import Description from './Description';
import './onerecipe.css';

export default function OneRecipePage() {
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

  const imgAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  const { id } = useParams();
  const dispatch = useDispatch();
  const oneRecipe = useSelector((state) => state.oneRecipe);

  console.log(id);
  useEffect(() => {
    dispatch(getOneRecipe(id));
  }, []);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      className="Features"
    >
      <div className="single-card">
        <div className="single-card__cont__img">
          <motion.img custom={2} variants={imgAnimation} className="single-card__image" src={oneRecipe.image} alt={oneRecipe.name} />
        </div>
        {/* <div
        className="single-card__info"
      /> */}
        <div className="single-card__header-info">
          <motion.h3 custom={1} variants={textAnimation} className="single-card__title">
            {oneRecipe.name}
          </motion.h3>
          <motion.div custom={2} variants={textAnimation} className="single-card__text">
            <ClockIcon />
            {' '}
            {oneRecipe.time}
            {' '}
            мин.
            <motion.div variants={textAnimation} className="levels">
              Сложность:
              Нормально
            </motion.div>
            <motion.div variants={textAnimation} className="amount">
              Кол-во порций:
              5
            </motion.div>
          </motion.div>
          <Ingredients />
          <div className="description">
            <motion.h3 custom={3} variants={textAnimation} className="description__title">Описание:</motion.h3>
            <motion.div custom={4} variants={textAnimation} className="description__content" dangerouslySetInnerHTML={{ __html: oneRecipe.description }} />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
