import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/slices/userSlice/userSlice';
import './nav.css';
import { filterRecipes, getRecipes } from '../../redux/slices/recipesSlice/recipesSlice';

export default function NavBar() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    navigate('/');
  };

  const inputHandler = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  useEffect(() => {
    if (input.length) {
      dispatch(filterRecipes(input));
    } else {
      dispatch(getRecipes());
    }
  }, [input]);

  return (
    <nav className="nav">
      {/* <i className="fas fa-bars" /> */}
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
        <input
          onChange={inputHandler}
          value={input}
          type="text"
          name="input"
          pattern=".*\S.*"
          required
        />
        <button className="search-btn" type="submit" onClick={(e) => inputHandler(e)}>
          <span>Search</span>
        </button>
      </form>
    </nav>

  );
}
