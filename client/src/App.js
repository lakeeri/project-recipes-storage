import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Registration from './Components/Registration/Registration';
import LogIn from './Components/LogIn/LogIn';
import MainPage from './Components/MainPage/MainPage';
import NavBar from './Components/NavBar/NavBar';
import { useDispatch } from 'react-redux';
import { checkUser } from './redux/slices/userSlice/userSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUser());
  }, []);

  return (
    <main>
    <header>
      <NavBar />
    </header>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/user/registration" element={<Registration />} />
        <Route path="/user/login" element={<LogIn />} />
      </Routes>
  </main>
  );
}

export default App;
