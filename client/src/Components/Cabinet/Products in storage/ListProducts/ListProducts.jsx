import React from 'react';

export default function ListProducts({ product }) {
  return (
    <div>{`${product.name} ${product.weight} ${product.unit}`}</div>
  );
}
