import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from '../assets/css/Layout.module.css';

const ContentArea: React.FC = () => {
  return (
    <div className={styles.containerArea}>
      <Outlet />
    </div>
  );
};

export default ContentArea;
