import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './nav.css';
import { CgSmartHomeRefrigerator } from 'react-icons/cg';
import { filterRecipes, getRecipes } from '../../redux/slices/recipesSlice/recipesSlice';
import Burger from './Burger';

export default function NavBar() {
  const user = useSelector((state) => state.user);
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

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
      <i className="logo">
        <CgSmartHomeRefrigerator />
      </i>
      <ul>
        {!user.id
          ? (
            <div className="info">
              <div className="home">
                <li><Link to="/">Home</Link></li>
              </div>
              <div className="person">
                <li><Link to="/">Hi, guest</Link></li>
              </div>
            </div>

          )
          : (
            <div className="info">
              <div className="home">
                <li><Link to="/">Home</Link></li>
              </div>
              <div className="person">
                <li><Link to="/">{`Hi, ${user.login}`}</Link></li>
              </div>
            </div>
          )}
      </ul>
      <form action="" className="search-bar">
        <input
          className="input-search"
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
      <Burger />
    </nav>

  );
}
