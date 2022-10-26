import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { setModal } from '../../redux/slices/modalSlice/modalSlice';
import './modalStyle.css';
import { addShoppingList } from '../../redux/slices/shoppingListSlice/shoppingListSlice';
import { deletePendingRecipes } from '../../redux/slices/pendingRecipeSlice/pendingRecipeSlice';
import { addMiddle } from '../../redux/slices/middleSlice/middleSlice';
import { addIngredientsSlice } from '../../redux/slices/ingredientsSlice/ingredientsSlice';

export default function ModalPage({ trigger }) {
  const [list, setList] = useState([]);

  const modal = useSelector((state) => state.modal);
  const storage = useSelector((state) => state.storage);
  // const middle = useSelector((state) => state.middle);
  const oneRecipe = useSelector((state) => state.oneRecipe);
  const dispatch = useDispatch();

  useEffect(() => {
    // const sum = middle?.filter((el) => el.name === 'Картофель').reduce((prev, curr) => prev + curr.weight, 0);
    // console.log(sum);
    modal?.Ingredients
      .forEach((mod) => !storage?.some((stor) => (mod.name.toLowerCase() === stor.name.toLowerCase()) && (mod.weight < stor.weight || mod.weight === stor.weight)) && setList((prev) => [...prev, {
        ...mod,
        // name: mod.name.toLowerCase(),
        weight: storage.filter((el) => el.name.toLowerCase() === mod.name.toLowerCase())[0]
          ? mod.weight - storage.filter((el) => el.name.toLowerCase() === mod.name.toLowerCase())[0].weight : mod.weight,
      }]));
  }, [trigger]);

  // console.log(storage[0].weight);
  // console.log(modal[0]?.weight?);

  const shoppingHandler = () => {
    dispatch(addShoppingList(list));
    dispatch(addMiddle(list));
    console.log(oneRecipe.Ingredients);
    dispatch(addIngredientsSlice(oneRecipe.Ingredients));
    dispatch(setModal(null));
    setList([]);
  };

  const handleClose = () => {
    dispatch(deletePendingRecipes(modal.id));
    dispatch(setModal(null));
    setList([]);
  };

  const closeModalHandler = () => {
    dispatch(setModal(null));
    setList([]);
  };

  return (
    <div>
      {list.length ? (
        <Modal show={modal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Необходимо докупить:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {list && list.map((el) => (
              <div className="two-in-row">
                <p>{el.name}</p>
                <p>{`${el.weight} ${el.unit}`}</p>
              </div>
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose} variant="secondary">
              Закрыть
            </Button>
            <Button variant="primary" onClick={shoppingHandler}>
              В список покупок
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <Modal show={modal} onHide={closeModalHandler}>
          <Modal.Header closeButton>
            <Modal.Title>Все ингредиенты есть. Вперед к готовке!</Modal.Title>
          </Modal.Header>
        </Modal>
      )}
    </div>
  );
}
