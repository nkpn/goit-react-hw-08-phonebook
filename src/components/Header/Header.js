import React from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/contacts-selector';
import AuthNav from 'Views/Authorization';
import Navigation from 'Views/Navigation';
import UserMenu from 'Views/UserMenu';
import style from './Header.module.css';

const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  console.log(isLoggedIn, 'is logged in?');
  return (
    <header className={style.PageHeader}>
      {/* <ul className={style.MainNav}>
          <li className={style.MainNavItem}>
            <p className={style.MainNavText}>Home</p>
          </li>

          <li className={style.MainNavItem}>
            <p className={style.MainNavText}>Registration</p>
          </li>
          <li className={style.MainNavItem}>
            <p className={style.MainNavText}>Login</p>
          </li>
        </ul> */}
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default Header;
