import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import styles from '../assets/css/Layout.module.css';

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  menuItems: { path: string; label: string;}[];
}

const Sidebar: React.FC<SidebarProps> = ({
  isSidebarOpen,
  toggleSidebar,
  menuItems,
}) => {
  return (
    <div
      className={`${
        isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed
      } ${styles.sidebar}`}
    >
      <div className={styles.sidebarContainer}>
        {/* <span
          className={`${isSidebarOpen ? styles.sidebarOpenText : styles.sidebarClosedText } text-lg font-bold`}
        >
        </span> */}
        <button
          onClick={toggleSidebar}
          className={styles.buttonSidebar}
        >
          {/* <FiMenu size={24} /> */}
        </button>
      </div>
      <nav className={styles.sidebarNav}>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `${styles.sidebarItem} ${
                isActive ? styles.sidebarItemOpen : ''
              }`
            }
          >
            {/* <span className="text-xl">{item.icon}</span> */}
            <span className={`${isSidebarOpen ? styles.sidebarOpenText : styles.sidebarClosedText}`}>
              {item.label}
            </span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
