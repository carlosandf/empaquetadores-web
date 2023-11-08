import React, { useCallback, useState } from 'react';
import './App.css';

type Prop = {
  message: string
}

export const App = ({ message }: Prop) => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('clicked');
    setCount((prevCount) => prevCount + 1);
  }, [count]);

  return (
    <>
      <h1>{message}</h1>
      <h2>Count: {count}</h2>
      <button
        onClick={handleClick}
      >
        Increment
      </button>
    </>
  );
};
