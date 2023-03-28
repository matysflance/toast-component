import React from 'react';
import { useEscapeKey } from '../../hooks/useEscapeKey';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const createToast = (message, variant) => {
    const toast = {
      id: crypto.randomUUID(),
      variant,
      message,
    };
    const newToasts = [...toasts, toast];
    setToasts(newToasts);
  };

  const removeToast = (id) => {
    const newToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(newToasts);
  };

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, []);
  useEscapeKey(handleEscape);

  return (
    <ToastContext.Provider
      value={{
        toasts,
        createToast,
        removeToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
