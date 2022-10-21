import React, { useEffect } from 'react';
// import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneRecipe } from '../../redux/slices/oneRecipeSlice/oneRecipeSlice';
import ClockIcon from './ClockIcons';
import Ingredients from './Ingredients';
// import Description from './Description';
import './onerecipe.css';

export default function OneRecipePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const oneRecipe = useSelector((state) => state.oneRecipe);

  console.log(id);
  useEffect(() => {
    dispatch(getOneRecipe(id));
  }, []);

  return (
    <div className="single-card">
      <div className="single-card__cont__img">
        <img className="single-card__image" src={oneRecipe.image} alt={oneRecipe.name} />
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
    </div>
  );
}
