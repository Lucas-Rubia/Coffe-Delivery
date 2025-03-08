import { useState } from "react";

export function useConter() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount((state) => Math.min(state + 1, 9));
  }

  function decrement(){
    setCount((state) => Math.max(state - 1, 0));
  }


  return {count, increment, decrement}
}



