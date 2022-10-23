import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { addProducts } from '../../../redux/slices/storageSlice/storageSlice';

export default function ShoppingListItem({ shoppinglist }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const addHandler = (e, input) => {
    e.preventDefault();
    console.log(input);
    dispatch(addProducts({
      ...input, userid: user.id, name: shoppinglist.name, unit: shoppinglist.unit,
    }));
  };

  return (
    <div onSubmit={(e) => addHandler(e, Object.fromEntries(new FormData(e.target)))}>
      <Row>
        <Col>
          <Typography style={{ marginTop: '3rem' }} variant="h6" gutterBottom>
            {`${shoppinglist.name} ${shoppinglist.weight} (${shoppinglist.unit})`}
          </Typography>
        </Col>
        <Col>
          <Button style={{ width: '130px', marginTop: '10px', marginLeft: '30px' }} variant="contained" type="submit">Добавить</Button>
        </Col>
      </Row>
    </div>
  );
}
