import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import style from './Navbar.module.scss';


const Navbar = () => (
  <nav className={style.navbar} data-cy="navbar">
    <div className={style.container}>
      <Link to="/">
        <img className={style.img} data-cy="navbar-logo" src={logo} alt="TV Maze" />
      </Link>
      <Link to="/">
        <h1 className={style.title} data-cy="navbar-title">TV Maze</h1>
      </Link>
    </div>
  </nav>
);

export default Navbar;
