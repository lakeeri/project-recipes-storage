import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { getShoppingList } from '../../../redux/slices/shoppingListSlice/shoppingListSlice';
import ShoppingListItem from './ShoppingListItem';
import { addProductsList, deleteProductsList } from '../../../redux/slices/storageSlice/storageSlice';

export default function ShoppingList() {
  const shoppingList = useSelector((state) => state.shoppingList);
  const dispatch = useDispatch();

  const addHandler = (e, input) => {
    e.preventDefault();
    dispatch(addProductsList((input)));
  };

  useEffect(() => {
    dispatch(getShoppingList());
  }, []);

  return (
    <>
      <div>
        {shoppingList && shoppingList?.map((el) => <ShoppingListItem key={el.id} shoppinglist={el} />)}
      </div>
      <form onSubmit={(e) => addHandler(e, shoppingList)}>
        <div>
          <Button onClick={() => dispatch(deleteProductsList(shoppingList))} style={{ width: '130px', marginTop: '10px', marginLeft: '30px' }} variant="contained" type="submit">Добавить</Button>
        </div>
      </form>
    </>
  );
}
