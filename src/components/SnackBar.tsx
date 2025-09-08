import { useState, useEffect, JSX } from 'react';
import styles from '../assets/css/Snackbar.module.css';

interface SnackbarProps {
  message: string;
  type?: 'Success' | 'Error' | 'Warning' | 'Info';
  duration?: number;
  onClose?: () => void;
}

function Snackbar({
  message,
  type = 'Success',
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

const typeClass = styles[`snackbar${type}`];

return (
    <div className={`${styles.snackbar} ${typeClass}`}>
        {message}
    </div>
);
}

export default Snackbar;