import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { addProducts } from '../../../../redux/slices/storageSlice/storageSlice';
import { getOneProduct } from '../../../../redux/slices/oneProductSlice/oneProductSlice';
import { addVirtualProducts } from '../../../../redux/slices/virtualStorageSlice/virtualStorageSlice';

export default function AddProducts() {
  const user = useSelector((state) => state.user);
  const products = useSelector((state) => state.products);
  const oneProduct = useSelector((state) => state.oneProduct);
  const dispatch = useDispatch();

  const addHandler = (e, input) => {
    e.preventDefault();
    dispatch(addProducts({
      ...input, userid: user.id, name: oneProduct.name, unit: oneProduct.unit,
    }));
    dispatch(addVirtualProducts({
      ...input, userid: user.id, name: oneProduct.name, unit: oneProduct.unit,
    }));
  };

  const [value, setValue] = useState(null);

  useEffect(() => {
    dispatch(getOneProduct(value));
  }, [value]);

  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={products.map((el) => el.name)}
        sx={{ width: 250, marginTop: '2rem' }}
        renderInput={(params) => <TextField {...params} label="Продукты" />}
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
      />
      {oneProduct && (
      <form onSubmit={(e) => addHandler(e, Object.fromEntries(new FormData(e.target)))}>
        <div>
          <Typography style={{ marginTop: '3rem' }} variant="h6" gutterBottom>
            {`${oneProduct.name} (${oneProduct.unit})`}
          </Typography>
          <TextField name="weight" type="number" id="outlined-basic" label="Количество" variant="outlined" />
        </div>
        <div>
          <Button style={{ width: '130px', marginTop: '10px', marginLeft: '30px' }} variant="contained" type="submit">Добавить</Button>
        </div>
      </form>
      )}
    </>
  );
}
