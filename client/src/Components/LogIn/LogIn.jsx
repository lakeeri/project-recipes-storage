import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { oldUser } from '../../redux/slices/userSlice/userSlice';

export default function LogIn() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const loginHandler = (event, inputs) => {
    event.preventDefault();
    dispatch(oldUser(inputs));
    navigate('/');
  };

  return (
    <motion.div
      className="registration"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <h1 className="form-title">Авторизация</h1>
        <form className="center" onSubmit={(e) => loginHandler(e, Object.fromEntries(new FormData(e.target)))}>
          <div className="main-user-info">
            <div className="user-input-box">
              <label htmlFor="email">Электронная почта</label>
              <input id="email" type="email" placeholder="Ваш email" name="email" />
            </div>
            <div className="user-input-box">
              <label htmlFor="password">Пароль</label>
              <input id="password" type="password" placeholder="пароль" name="password" />
            </div>
          </div>
          <div className="container-button">
            <button className="form-submit-btn" type="submit">Подтвердить</button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
