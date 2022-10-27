import React from 'react';
import { useDispatch } from 'react-redux';
import { FiXSquare } from 'react-icons/fi';
import { deleteProducts } from '../../../../redux/slices/storageSlice/storageSlice';
import '../StorageProducts.css';

export default function ListProducts({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="list-of-products">
      <FiXSquare
        className="x-button"
        onClick={() => {
          dispatch(deleteProducts(product.id));
        }}
      />
      {' '}
      {`${product.name} ${product.weight} ${product.unit}`}
    </div>
  );
}
