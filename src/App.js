import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const savedCount = localStorage.getItem("counter");
    if (savedCount) {
      setCount(parseInt(savedCount));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("counter", count);
  }, [count]);

  return (
    <div className="container text-center mt-5">
      <h2>Counter App</h2>
      <h3 className="display-4">{count}</h3>
      <div className="mt-3">
        <button
          className="btn btn-success me-2"
          onClick={() => setCount(count + 1)}
        >
          Increase
        </button>
        <button
          className="btn btn-danger me-2"
          onClick={() => setCount(count - 1)}
        >
          Decrease
        </button>
        <button className="btn btn-warning" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
