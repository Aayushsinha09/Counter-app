import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedCount = localStorage.getItem("counter");
    if (savedCount) {
      setCount(parseInt(savedCount));
    }
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
  }, []);

  useEffect(() => {
    localStorage.setItem("counter", count);
  }, [count]);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowUp") {
        setCount((prev) => prev + step);
      } else if (event.key === "ArrowDown") {
        setCount((prev) => prev - step);
      } else if (event.key === "r") {
        setCount(0);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [step]);

  return (
    <div className={`d-flex flex-column justify-content-center align-items-center vh-100 ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>
      <h2>Counter App</h2>
      <h3 className="display-4">{count}</h3>
      <div className="mt-3">
        <button
          className="btn btn-success me-2"
          onClick={() => setCount(count + step)}
        >
          Increase
        </button>
        <button
          className="btn btn-danger me-2"
          onClick={() => setCount(count - step)}
        >
          Decrease
        </button>
        <button className="btn btn-warning me-2" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
      <div className="mt-3">
        <label>Step Count: </label>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(parseInt(e.target.value) || 1)}
          className="form-control d-inline w-25 ms-2"
        />
      </div>
      <div className="mt-3">
        <button className="btn btn-secondary" onClick={() => setDarkMode(!darkMode)}>
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
