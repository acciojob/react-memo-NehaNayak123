// UseMemo.js
import React, { useMemo } from "react";

function CountInfo({ count }) {
  const expensiveCalculation = useMemo(() => {
    console.log("Running expensive calculation...");
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += i;
    }
    return total + count;
  }, [count]);

  return <p>Expensive count result: {expensiveCalculation}</p>;
}

export default CountInfo;