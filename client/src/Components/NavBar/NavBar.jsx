import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { logoutUser } from '../../redux/slices/userSlice/userSlice';
import './nav.css';
import Burger from './Burger';

export default function NavBar() {
  const user = useSelector((state) => state.user);
  // const navigate = useNavigate();

  // const dispatch = useDispatch();

  // const logoutHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(logoutUser());
  //   navigate('/');
  // };

  return (
    <nav className="nav">
      <i className="fas fa-bars" />
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
        <input type="search" name="search" pattern=".*\S.*" required />
        <button className="search-btn" type="submit">
          <span>Search</span>
        </button>
      </form>
      <Burger />
    </nav>

  );
}
