import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Row, Col } from 'react-bootstrap';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import { BsCheckCircle } from 'react-icons/bs';
import { addProducts } from '../../../redux/slices/storageSlice/storageSlice';
import { deleteProductShoppingList } from '../../../redux/slices/shoppingListSlice/shoppingListSlice';
import './shop.css';

export default function ShoppingListItem({ shoppinglist }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const addProductHandler = (e, input) => {
    e.preventDefault();
    console.log('!!!!!!!!!!', input);
    dispatch(addProducts({ ...input, userid: user.id }));
  };

  return (
  // <form onSubmit={(e) => addProductHandler(e, shoppinglist)}>
  //   <Row>
  //     <Col>
  //       <Typography style={{ marginTop: '3rem' }} variant="h6" gutterBottom>
  //         {`${shoppinglist.name} ${shoppinglist.weight} (${shoppinglist.unit})`}
  //       </Typography>
  //     </Col>
  //     <Col>
  //       <Button onClick={() => dispatch(deleteProductShoppingList(shoppinglist.id))} style={{ width: '130px', marginTop: '10px', marginLeft: '30px' }} variant="contained" type="submit">Добавить</Button>
  //     </Col>
  //   </Row>
  // </form>

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
