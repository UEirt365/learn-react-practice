import { useEffect, useState } from "react";

const useCounter = (unit) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + unit);
    }, 1000);

    return () => clearInterval(interval);
  }, [unit]);

  return counter;
};

export default useCounter;
