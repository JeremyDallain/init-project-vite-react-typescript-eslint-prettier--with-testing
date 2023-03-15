import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello World</h1>
      <span>{count}</span>
    </>
  );
}
