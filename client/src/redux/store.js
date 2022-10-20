import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../redux/slices/userSlice/userSlice';


export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});