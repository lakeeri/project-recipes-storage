import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {};
const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser(state, action) {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;

export const getUser = (inputs) => (dispatch) => {
  axios.post('/api/user/registration', { inputs })
    .then((res) => dispatch(setUser(res.data)));
};

export const checkUser = () => (dispatch) => {
  axios.post('/api/user/check')
    .then((res) => dispatch(setUser(res.data)));
};

export const oldUser = (inputs) => (dispatch) => {
  axios.post('/api/user/login', { inputs })
    .then((res) => dispatch(setUser(res.data)));
};

export const logoutUser = () => (dispatch) => {
  axios('/api/user/logout')
    .then(() => dispatch(setUser({})));
};
