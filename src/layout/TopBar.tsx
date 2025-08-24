import React from 'react';
import { FiMenu } from 'react-icons/fi';
import styles from '../assets/css/Layout.module.css';

interface TopBarProps {
  toggleSidebar: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ toggleSidebar }) => {
  return (
    <div className={styles.topBar}>
      <h1 className="">Área Restrita</h1>
      <button
        onClick={toggleSidebar}
        className="text-blue-600 focus:outline-none md:hidden"
      >
        {/* <FiMenu size={24} /> */}
      </button>
    </div>
  );
};

export default TopBar;
