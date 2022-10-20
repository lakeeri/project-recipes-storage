import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/slices/userSlice/userSlice';
import './nav.css';

export default function NavBar() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();


  const dispatch = useDispatch();

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    navigate('/');
  };

  return (
    <nav className="nav">
      <i className="fas fa-bars" />
      <div className="title">Choose your place</div>
      <ul>
        {!user.id
          ? (
            <>
              <li><Link to="/user/registration">Register</Link></li>
              <li><Link to="/user/login">Login</Link></li>
            </>
          )
          : (
            <>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">{`Hi,${user.login}`}</Link></li>
              <li><Link to="/storage">Personal storage</Link></li>
              <li><Link to="/user/logout" onClick={(e) => logoutHandler(e)}>Logout</Link></li>
            </>
          )}
      </ul>
      <form action="" className="search-bar">
        <input type="search" name="search" pattern=".*\S.*" required />
        <button className="search-btn" type="submit">
          <span>Search</span>
        </button>
      </form>
    </nav>

  );
}
