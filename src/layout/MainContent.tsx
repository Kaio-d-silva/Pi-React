import React from 'react';
import TopBar from './TopBar';
import ContentArea from './ContentArea';
import styles from '../assets/css/Layout.module.css';

interface MainContentProps {
  toggleSidebar: () => void;
}

const MainContent: React.FC<MainContentProps> = ({ toggleSidebar }) => {
  return (
    <div className={styles.mainContent}>
      <TopBar toggleSidebar={toggleSidebar} />
      <ContentArea />
    </div>
  );
};

export default MainContent;
