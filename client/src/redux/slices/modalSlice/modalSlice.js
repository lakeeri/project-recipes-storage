import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    setModal(state, action) {
      return action.payload;
    },
  },
});

export const { setModal } = modalSlice.actions;
export default modalSlice.reducer;
