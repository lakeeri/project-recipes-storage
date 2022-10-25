import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getUser } from '../../redux/slices/userSlice/userSlice';

export default function Registration() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegistration = (event, inputs) => {
    event.preventDefault();
    dispatch(getUser(inputs));
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
        <h1 className="form-title">Registration</h1>
        <form className="center" onSubmit={(e) => handleRegistration(e, Object.fromEntries(new FormData(e.target)))}>
          <div className="main-user-info">
            <div className="user-input-box">
              <label htmlFor="login">Your name</label>
              <input id="login" type="text" placeholder="Enter name" name="login" />
            </div>
            <div className="user-input-box">
              <label htmlFor="email">Email address</label>
              <input id="email" type="email" placeholder="Enter email" name="email" />
            </div>
            <div className="user-input-box">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="Password" name="password" />
            </div>
          </div>
          <div className="container-button">
            <button className="form-submit-btn" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
