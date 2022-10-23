import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStorage } from '../../../redux/slices/storageSlice/storageSlice';
import AddProducts from './AddProducts/AddProducts';
import ListProducts from './ListProducts/ListProducts';
import './StorageProducts.css';

export default function StorageProducts() {
  const storage = useSelector((state) => state.storage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStorage());
  }, []);

  return (
    <div className="StorageProducts">
      <div className="list-all-products">
        <p className="list-p">Список имеющихся продуктов:</p>
        {storage && storage?.map((el) => <ListProducts key={el.id} product={el} />)}
      </div>
      <div>
        <AddProducts />
      </div>
    </div>
  );
}
