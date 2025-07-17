import React, { ReactNode, useRef, useState } from "react";

import styles from "../assets/css/Collapse.module.css";

interface CollapseProps {
  title: string;
  children: ReactNode;
  typeForm: string
}

const Collapse: React.FC<CollapseProps> = ({ title, children, typeForm}) => {
    const [open, setOpen] = useState<boolean>(false);
    const contentRef = useRef<HTMLDivElement>(null);
  
    const toggleCollapse = () => {
      setOpen((prev) => !prev);
    };
    
  return (
    <div className={styles.collapse}>
      <div className={`
        ${styles.collapseTitle} 
        ${open ?  styles.collapseOpenTitle : styles.collapseClosedTitle }
        ${typeForm === "Controle de Glicemia" ? styles.collapseGlicemiaTitle :
          typeForm === "Controle de Diálise" ? styles.collapseDialiseTitle : styles.collapseBothFormsTitle
         }
        `} 
        onClick={toggleCollapse}>
        {title}
        <span>{open ? "▲" : "▼"}</span>
      </div>
      <div
        ref={contentRef}
        className={`
          ${styles.collapseContent}
          ${typeForm === "Controle de Glicemia" ? styles.collapseGlicemiaTitle :
            typeForm === "Controle de Diálise" ? styles.collapseDialiseTitle : styles.collapseBothFormsContent
           }
          `
        }
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
