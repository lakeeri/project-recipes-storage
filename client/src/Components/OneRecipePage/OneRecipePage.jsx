import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setModal } from '../../redux/slices/modalSlice/modalSlice';
import { getOneRecipe } from '../../redux/slices/oneRecipeSlice/oneRecipeSlice';
import ModalPage from '../ModalPage/ModalPage';
import ClockIcon from './ClockIcons';
import Ingredients from './Ingredients';
import './onerecipe.css';

export default function OneRecipePage() {
  const [trigger, setTrigger] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const oneRecipe = useSelector((state) => state.oneRecipe);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getOneRecipe(id));
  }, []);

  const modalHandler = (e) => {
    e.preventDefault();
    dispatch(setModal(oneRecipe));
    setTrigger((prev) => !prev);
  };

  return (
    <div className="single-card">
      <div className="single-card__cont__img">
        <img className="single-card__image" src={oneRecipe.image} alt={oneRecipe.name} />
        {user.id
       && (
       <fieldset>
         <legend>Хочу приготовить</legend>
         <div>
           <input type="checkbox" id="horns" name="horns" onClick={(e) => modalHandler(e)} />
           <label htmlFor="horns">Horns</label>
         </div>
       </fieldset>
       )}
      </div>
      {/* <div
        className="single-card__info"
      /> */}
      <div className="single-card__header-info">
        <h3 className="single-card__title">
          {oneRecipe.name}
        </h3>
        <div className="single-card__text">
          <ClockIcon />
          {' '}
          {oneRecipe.time}
          {' '}
          мин.
          <div className="levels">
            Сложность:
            Нормально
          </div>
          <div className="amount">
            Кол-во порций:
            5
          </div>
        </div>
        <Ingredients />
        <div className="description">
          <h3 className="description__title">Описание:</h3>
          <div className="description__content" dangerouslySetInnerHTML={{ __html: oneRecipe.description }} />
        </div>
      </div>
      <ModalPage setTrigger={setTrigger} trigger={trigger} />
    </div>
  );
}
