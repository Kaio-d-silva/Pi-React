import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import { FiHome } from 'react-icons/fi';
import { TbUsersGroup, TbUsersPlus } from 'react-icons/tb';
import styles from '../assets/css/Layout.module.css';

const RestrictedLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuItems = [
    { path: '/', label: 'Home'},
    { path: '/cadastroPaciente', label: 'Listar Usuários',},
    { path: '/users/new', label: 'Criar Usuário',},

    // { path: '/home', label: 'Home', icon: <FiHome /> },
    // { path: '/users', label: 'Listar Usuários', icon: <TbUsersGroup /> },
    // { path: '/users/new', label: 'Criar Usuário', icon: <TbUsersPlus /> },

  ];

  return (
    <div className={styles.restrictedLayout}>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        menuItems={menuItems}
      />
      <MainContent toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default RestrictedLayout;
