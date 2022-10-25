import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Button from '@mui/material/Button';
import { getShoppingList } from '../../../redux/slices/shoppingListSlice/shoppingListSlice';
import ShoppingListItem from './ShoppingListItem';
import { addProductsList, deleteProductsList } from '../../../redux/slices/storageSlice/storageSlice';
import './shop.css';

export default function ShoppingList() {
  const shoppingList = useSelector((state) => state.shoppingList);
  const dispatch = useDispatch();

  const addHandler = (e, input) => {
    e.preventDefault();
    dispatch(addProductsList((input)));
  };

  const clickHandler = (e) => {
    e.preventDefault();
    axios.post('/api/mailer');
  };

  useEffect(() => {
    dispatch(getShoppingList());
  }, []);

  return (
    <>
      <h2>Ваша корзина</h2>
      <div className="shop-list">
        {shoppingList && shoppingList?.map((el) => <ShoppingListItem key={el.id} shoppinglist={el} />)}
      </div>
      <form onSubmit={(e) => addHandler(e, shoppingList)}>
        <div>
          <Button onClick={() => dispatch(deleteProductsList(shoppingList))} style={{ width: '130px', marginTop: '10px', marginLeft: '30px' }} variant="contained" type="submit">Добавить</Button>
        </div>
        <div>
          <Button onClick={clickHandler} style={{ width: '230px', marginTop: '10px', marginLeft: '30px' }} variant="contained" type="submit">Отправить на почту</Button>
        </div>
      </form>
    </>
  );
}
