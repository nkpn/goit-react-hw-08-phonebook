import React from 'react';
import { useSelector } from 'react-redux';
import * as authSelector from '../../redux/AuthRedux/authSelector';
import AuthNav from 'Views/Authorization';
import Navigation from 'Views/Navigation';
import UserMenu from 'Views/UserMenu';
import style from './Header.module.css';

const Header = () => {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  return (
    <header className={style.PageHeader}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default Header;
