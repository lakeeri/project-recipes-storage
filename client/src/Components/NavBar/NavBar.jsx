import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './nav.css';
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
      <div className="title">C</div>
      <ul>
        {!user.id
          ? (
            <>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Hi, guest</Link></li>
            </>

          )
          : (
            <>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">{`Hi,${user.login}`}</Link></li>
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
      <Burger />
    </nav>

  );
}
