import React, { ReactNode } from 'react';

import style from  '../assets/css/Collapse.module.css';
 

interface CollapseProps {
  title: string;
  children: ReactNode;
}

const Collapse: React.FC<CollapseProps> = ({ title, children }) => {
  return (
    <details className={style.collapse}>
      <summary className={style.collapseTitle}>{title}</summary>
      <div className={style.collapseContent}>{children}</div>
    </details>
  );
};

export default Collapse;
