import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { addProducts } from '../../../redux/slices/storageSlice/storageSlice';
import { deleteProductShoppingList } from '../../../redux/slices/shoppingListSlice/shoppingListSlice';

export default function ShoppingListItem({ shoppinglist }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const addProductHandler = (e, input) => {
    e.preventDefault();
    console.log('!!!!!!!!!!', input);
    dispatch(addProducts({ ...input, userid: user.id }));
  };

  return (
    <form onSubmit={(e) => addProductHandler(e, shoppinglist)}>
      <Row>
        <Col>
          <Typography style={{ marginTop: '3rem' }} variant="h6" gutterBottom>
            {`${shoppinglist.name} ${shoppinglist.weight} (${shoppinglist.unit})`}
          </Typography>
        </Col>
        <Col>
          <Button onClick={() => dispatch(deleteProductShoppingList(shoppinglist.id))} style={{ width: '130px', marginTop: '10px', marginLeft: '30px' }} variant="contained" type="submit">Добавить</Button>
        </Col>
      </Row>
    </form>
  );
}
