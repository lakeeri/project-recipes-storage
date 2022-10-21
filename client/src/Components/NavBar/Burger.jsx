import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/slices/userSlice/userSlice';
import './burger.css';

export default function Burger() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    navigate('/');
  };
  return (
    <div>
      <button className="btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {/* <i className="bi bi-list" /> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
      </button>
      {/* <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span />
      </label> */}
      <ul className="dropdown-menu">
        {!user.id
          ? (
            <>
              <Link to="/user/registration"><li>Register</li></Link>
              <Link to="/user/login"><li>Login</li></Link>
            </>
          )
          : (
            <>
              <Link to="/"><li>Home</li></Link>
              <Link to="/storage"><li>Personal storage</li></Link>
              <Link to="/user/logout" onClick={(e) => logoutHandler(e)}><li>Logout</li></Link>
            </>
          )}
      </ul>
    </div>
  );
}
