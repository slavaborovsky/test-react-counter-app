import { useRef, useState } from 'react';

export default function useCounter(initialState = 0) {
  const [count, setCount] = useState(initialState);
  const timerRef = useRef();

  const internalIncrement = (offset) => setCount((current) => current + offset);
  const increment = (offset = 1) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    internalIncrement(offset);

    timerRef.current = setInterval(() => {
      internalIncrement(offset);
    }, 500);
  };

  const internalDecrement = (offset) => setCount((current) => current - offset);
  const decrement = (offset = 1) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    internalDecrement(offset);

    timerRef.current = setInterval(() => {
      internalDecrement(offset);
    }, 500);
  };

  const reset = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    setCount(0);
  };

  return {
    count,
    increment,
    decrement,
    reset,
  };
}
