import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

const ingredientsSlice = createSlice({
  name: 'ingredientsSlice',
  initialState,
  reducers: {
    setIngredientsSlice(state, action) {
      return action.payload;
    },
    // setOneMiddleSlice(state, action) {
    //   return action.payload;
    // },
    // deleteMiddleSlice(state, action) {
    //   return state.filter((el) => (el.recipeid !== action.payload));
    // },
  },
});

export const { setIngredientsSlice } = ingredientsSlice.actions;
export default ingredientsSlice.reducer;

export const getIngredientsSlice = () => (dispatch) => {
  axios.get('/api/ingredients')
    .then((res) => dispatch(setIngredientsSlice(res.data)));
};

export const addIngredientsSlice = (value) => (dispatch) => {
  axios.post('/api/ingredients', value)
    .then((res) => dispatch(setIngredientsSlice(res.data)));
};

// export const deleteMiddle = (id) => (dispatch) => {
//   axios.delete('/api/middle', { data: { id } })
//     .then((res) => { dispatch(deleteMiddleSlice(Number(id))); dispatch(changeShoppingList(res.data)); });
// };
