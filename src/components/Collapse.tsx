import React, { ReactNode, useRef, useState } from "react";

import styles from "../assets/css/Collapse.module.css";

interface CollapseProps {
  title: string;
  children: ReactNode;
}

const Collapse: React.FC<CollapseProps> = ({ title, children }) => {
    const [open, setOpen] = useState<boolean>(false);
    const contentRef = useRef<HTMLDivElement>(null);
  
    const toggleCollapse = () => {
      setOpen((prev) => !prev);
    };
    
  return (
    <div className={styles.collapse}>
      <div className={styles.collapseTitle} onClick={toggleCollapse}>
        {title}
        <span>{open ? "▲" : "▼"}</span>
      </div>
      <div
        ref={contentRef}
        className={styles.collapseContent}
        style={{
          maxHeight: open ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;
