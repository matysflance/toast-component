import React from 'react';

export const useKeyDown = (key, callback) => {
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === key) {
        callback();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [key, callback]);
};
