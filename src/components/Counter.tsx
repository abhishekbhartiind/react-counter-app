import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const [incrementing, setIncrementing] = useState<boolean>(false);

  useEffect(() => {
    let interval: any;
    if (incrementing) {
      interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [incrementing]);

  const onClickStartButton = (value: boolean) => {
    setIncrementing(value);
  };

  const onClickResetButton = () => {
    setCount(0);
    setIncrementing(false);
  };

  return (
    <section className="App">
      <h1>Counter</h1>
      <h2>{count}</h2>

      <div className="button-container">
        <button onClick={() => onClickStartButton(count ? false : true)}>
          {count ? "Pause" : "Start"}
        </button>
        <button onClick={onClickResetButton}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
