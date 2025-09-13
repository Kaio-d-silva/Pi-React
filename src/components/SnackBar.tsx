import * as React from "react";
import { useState, useEffect, JSX } from "react";
import styles from "../assets/css/SnackBar.module.css";

export interface SnackbarProps {
  message: string; // Mensagem a ser exibida no Snackbar
  type?: "success" | "error" | "warning" | "info"; // Tipo do Snackbar
  duration?: number; // Duração em milissegundos
  onClose?: () => void; // Função chamada ao fechar o Snackbar
}
export interface SnackbarState {
  message: string;
  type?: "success" | "error" | "warning" | "info"; // Torna o tipo opcional
  duration: number;
}
function Snackbar({
  message,
  type = "success",
  duration = 10000,
  onClose = undefined,
}: SnackbarProps): JSX.Element | null {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        if (onClose) onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
    return undefined;
  }, [message, duration, onClose]);

  if (!visible) return null;

  return (
    <div
      className={`${styles.snackbar} ${styles[type]} `}
    >
      {message}
    </div>
  );
}
export default Snackbar;