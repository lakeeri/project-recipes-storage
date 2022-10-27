import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setModal } from '../../redux/slices/modalSlice/modalSlice';
import { getOneRecipe } from '../../redux/slices/oneRecipeSlice/oneRecipeSlice';
import ModalPage from '../ModalPage/ModalPage';
import ClockIcon from './ClockIcons';
import Ingredients from './Ingredients';
import './onerecipe.css';
import { getShoppingList } from '../../redux/slices/shoppingListSlice/shoppingListSlice';
import { addPendingRecipes, deletePendingRecipes } from '../../redux/slices/pendingRecipeSlice/pendingRecipeSlice';
import { deleteMiddle, getMiddle } from '../../redux/slices/middleSlice/middleSlice';
import { changeVirtualStorage, getVirtualStorage } from '../../redux/slices/virtualStorageSlice/virtualStorageSlice';

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

  const [trigger, setTrigger] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const oneRecipe = useSelector((state) => state.oneRecipe);
  const user = useSelector((state) => state.user);
  const pends = useSelector((state) => state.pending);

  useEffect(
    () => {
      dispatch(getOneRecipe(id));
      dispatch(getShoppingList());
      dispatch(getVirtualStorage());
      dispatch(getMiddle());
    },
    [],
  );

  const modalHandler = (e) => {
    e.preventDefault();
    dispatch(setModal(oneRecipe));
    dispatch(addPendingRecipes(id));
    setTrigger((prev) => !prev);
  };
  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(deleteMiddle(id));
    dispatch(deletePendingRecipes(id));
    dispatch(changeVirtualStorage(oneRecipe.Ingredients));
  };

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
          {user.id
       && (
       <motion.section
         initial="hidden"
         whileInView="visible"
         viewport={{ amount: 0.2 }}
         className="Features"
       >
         <div className="want-box">
           <motion.h5 custom={3} variants={imgAnimation} className="want-to-cook">
             Хочу приготовить
             {' '}
             {pends.map((el) => el.recipeId).includes(Number(id))
               ? (<i className="fa-regular fa-square-check fa-2xl" onClick={(e) => deleteHandler(e)} />)
               : (<i className="fa-regular fa-square fa-2xl" onClick={(e) => modalHandler(e)} />)}
           </motion.h5>
         </div>
       </motion.section>
       )}
        </div>
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
              {' '}
              {oneRecipe.complexity}
            </motion.div>
            <motion.div variants={textAnimation} className="amount">
              Кол-во порций:
              {' '}
              {oneRecipe.portions}
            </motion.div>
          </motion.div>
          <Ingredients />
          <div className="description">
            <motion.h3 custom={3} variants={textAnimation} className="description__title">Описание:</motion.h3>
            <motion.div custom={4} variants={textAnimation} className="description__content" dangerouslySetInnerHTML={{ __html: oneRecipe.description }} />
          </div>
        </div>
        <ModalPage setTrigger={setTrigger} trigger={trigger} />
      </div>
    </motion.section>
  );
}
