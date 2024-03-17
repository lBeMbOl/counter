import { useEffect, useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { SetCounter } from "./components/SetCounter";

function App() {
  const [count, setCount] = useState<number>(0);
  const [maxCount, setMaxCount] = useState<number>(10);
  const [startCount, setStartCount] = useState<number>(0);
  const [newCount, setNewCount] = useState(false);

  let error = startCount < maxCount && startCount >= 0;
  useEffect(() => {
    let StoreCount = localStorage.getItem("countValue");
    let StoreMaxCount = localStorage.getItem("maxValue");
    let StoreStartount = localStorage.getItem("startValue");
    if (StoreMaxCount) {
      setMaxCount(JSON.parse(StoreMaxCount));
    }
    if (StoreStartount) {
      setStartCount(JSON.parse(StoreStartount));
    }
    if (StoreCount) {
      setCount(JSON.parse(StoreCount));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("countValue", JSON.stringify(count));
  }, [count]);

  useEffect(() => {
    localStorage.setItem("maxValue", JSON.stringify(maxCount));
    setNewCount(false);
  }, [maxCount]);

  useEffect(() => {
    localStorage.setItem("startValue", JSON.stringify(startCount));
    setNewCount(false);
  }, [startCount]);

  return (
    <div className="App">
      <Counter
        count={count}
        setCount={setCount}
        max={maxCount}
        start={startCount}
        error={error}
        newcount={newCount}
      />
      <SetCounter
        maxValue={maxCount}
        startValue={startCount}
        setMaxValue={setMaxCount}
        setStartValue={setStartCount}
        setCount={() => {
          setCount(startCount);
          setNewCount(true);
        }}
        error={error}
      />
    </div>
  );
}

export default App;
