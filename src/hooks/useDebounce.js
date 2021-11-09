import { useEffect, useRef } from 'react';

const useDebounce = (callback, delay, dependencies) => {
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const timeout = setTimeout(callbackRef.current, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [delay, ...dependencies]);
};

export default useDebounce;
