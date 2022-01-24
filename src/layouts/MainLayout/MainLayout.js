import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import style from './MainLayout.module.scss';


const MainLayout = ({ children }) => {
  return (
    <div className={style.app}>
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
