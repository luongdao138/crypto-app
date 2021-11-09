import { useState } from 'react';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    try {
      const item = JSON.parse(localStorage.getItem(key));
      if (item) {
        return item;
      } else {
        return defaultValue;
      }
    } catch (error) {
      return defaultValue;
    }
  });

  const setValueStorage = (newValue) => {
    try {
      if (typeof newValue === 'function') {
        localStorage.setItem(key, JSON.stringify(newValue()));
        setState(newValue());
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
        setState(newValue);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [state, setValueStorage];
};

export default useLocalStorage;
