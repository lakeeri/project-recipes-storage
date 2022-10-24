import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { getShoppingList } from '../../../redux/slices/shoppingListSlice/shoppingListSlice';
import ShoppingListItem from './ShoppingListItem';
import { addProductsList } from '../../../redux/slices/storageSlice/storageSlice';

export default function ShoppingList() {
  const shoppingList = useSelector((state) => state.shoppingList);
  // const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const addHandler = (e, input) => {
    e.preventDefault();
    console.log(input);
    dispatch(addProductsList((input)));
  };

  useEffect(() => {
    dispatch(getShoppingList());
  }, []);

  return (
    <form onSubmit={(e) => addHandler(e, shoppingList)}>
      <div>
        {shoppingList && shoppingList?.map((el) => <ShoppingListItem key={el.id} shoppinglist={el} />)}
      </div>
      <div>
        <Button style={{ width: '130px', marginTop: '10px', marginLeft: '30px' }} variant="contained" type="submit">Добавить</Button>
      </div>
    </form>
  );
}
