import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsCheckCircle } from 'react-icons/bs';
import { addProducts } from '../../../redux/slices/storageSlice/storageSlice';
import { deleteProductShoppingList } from '../../../redux/slices/shoppingListSlice/shoppingListSlice';
import './shop.css';
import { addVirtualProducts } from '../../../redux/slices/virtualStorageSlice/virtualStorageSlice';

export default function ShoppingListItem({ shoppinglist }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const addProductHandler = (e, input) => {
    e.preventDefault();
    dispatch(addProducts({ ...input, userid: user.id }));
    dispatch(addVirtualProducts({ ...input, userid: user.id }));
  };

  return (

    <form className="shop-item" onSubmit={(e) => addProductHandler(e, shoppinglist)}>
      <button type="submit" className="btn-cart">
        <BsCheckCircle
          className="cart-button"
          onClick={() => { dispatch(deleteProductShoppingList(shoppinglist.id)); }}
          type="submit"
        />

      </button>

      <p className="product-shop">{`${shoppinglist.name} ${shoppinglist.weight} (${shoppinglist.unit})`}</p>
    </form>
  );
}
