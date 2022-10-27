import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { setModal } from '../../redux/slices/modalSlice/modalSlice';
import './modalStyle.css';
import { deleteVirtualProductsCooked } from '../../redux/slices/virtualStorageSlice/virtualStorageSlice';
import { addShoppingList } from '../../redux/slices/shoppingListSlice/shoppingListSlice';
import { deletePendingRecipes } from '../../redux/slices/pendingRecipeSlice/pendingRecipeSlice'; import { addMiddle } from '../../redux/slices/middleSlice/middleSlice';

export default function ModalPage({ trigger }) {
  const [list, setList] = useState([]);

  const modal = useSelector((state) => state.modal);
  const virtualSorage = useSelector((state) => state.virtualSorage);
  const dispatch = useDispatch();

  useEffect(() => {
    modal?.Ingredients
      .forEach((mod) => !virtualSorage?.some((stor) => (mod.name.toLowerCase() === stor.name.toLowerCase()) && (mod.weight < stor.weight || mod.weight === stor.weight)) && setList((prev) => [...prev, {
        ...mod,
        weight: virtualSorage.filter((el) => el.name.toLowerCase() === mod.name.toLowerCase())[0]
          ? mod.weight - virtualSorage.filter((el) => el.name.toLowerCase() === mod.name.toLowerCase())[0].weight : mod.weight,
      }]));
  }, [trigger]);

  const shoppingHandler = () => {
    dispatch(addShoppingList(list));
    dispatch(deleteVirtualProductsCooked(modal?.Ingredients));
    dispatch(addMiddle(list));
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
