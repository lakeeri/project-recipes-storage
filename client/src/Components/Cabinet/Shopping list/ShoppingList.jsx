import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Button from '@mui/material/Button';
import { getShoppingList } from '../../../redux/slices/shoppingListSlice/shoppingListSlice';
import ShoppingListItem from './ShoppingListItem';
import { addProductsList, deleteProductsList } from '../../../redux/slices/storageSlice/storageSlice';
import './shop.css';
import { addVirtualProductsList } from '../../../redux/slices/virtualStorageSlice/virtualStorageSlice';

export default function ShoppingList() {
  const shoppingList = useSelector((state) => state.shoppingList);
  const dispatch = useDispatch();

  const addHandler = (e, input) => {
    e.preventDefault();
    dispatch(addProductsList((input)));
    dispatch(addVirtualProductsList((input)));
  };

  const clickHandler = (e) => {
    e.preventDefault();
    axios.post('/api/mailer');
  };

  useEffect(() => {
    dispatch(getShoppingList());
  }, []);

  return (
    <div className="shop-list-main-div">
      <h2 className="list-title">Ваша корзина</h2>
      <div className="shop-list">
        {shoppingList && shoppingList?.map((el) => <ShoppingListItem key={el.id} shoppinglist={el} />)}
      </div>
      <form onSubmit={(e) => addHandler(e, shoppingList)}>
        <div>
          <Button onClick={() => dispatch(deleteProductsList(shoppingList))} style={{ width: '130px', marginTop: '10px', marginLeft: '30px' }} variant="contained" type="submit">Добавить</Button>
        </div>
        <div>
          <Button onClick={clickHandler} style={{ width: '230px', marginTop: '10px', marginLeft: '30px' }} variant="contained" type="submit">
            Отправить на почту
            <svg className="send" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </Button>
        </div>
      </form>
    </div>
  );
}
