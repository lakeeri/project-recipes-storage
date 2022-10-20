import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
    <div className="registration">
      <div className="container">
        <h1 className="form-title">Authorisation</h1>
        <form className="center" onSubmit={(e) => loginHandler(e, Object.fromEntries(new FormData(e.target)))}>
          <div className="main-user-info">
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
    </div>
  );
}