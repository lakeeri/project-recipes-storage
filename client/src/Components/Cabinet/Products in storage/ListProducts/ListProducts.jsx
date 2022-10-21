import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { deleteProducts } from '../../../../redux/slices/storageSlice/storageSlice';

export default function ListProducts({ product }) {
  const dispatch = useDispatch();
  return (
    <div>
      {`${product.name} ${product.weight} ${product.unit}`}
      <Button onClick={() => dispatch(deleteProducts(product.id))} style={{ background: '#90caf9' }}>Delete</Button>
    </div>
  );
}
