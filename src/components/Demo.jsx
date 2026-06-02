import { useState, useMemo } from "react";

export default function App() {

  const [count, setCount] = useState(0);

  const squaredValue = useMemo(() => {
    console.log("Calculating...");
    return count * count;
  }, [count]);

  return (
    <div>

      <h1>Count: {count}</h1>

      <h2>Square: {squaredValue}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

    </div>
  );
}