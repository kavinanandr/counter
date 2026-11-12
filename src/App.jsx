import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  }

  return (
    <>
      <header>
        <h1>Counter</h1>
      </header>

      <main>
        <h2>counter value: {counter}</h2>
        <div className="buttons">
          <button id="decrement" onClick={decrement}>
            - dec
          </button>
          <button id="reset" onClick={reset}>&#x21BA; reset</button>
          <button id="increment" onClick={increment}>
            + inc
          </button>
        </div>
      </main>

      <footer>&copy;Kavin Anand</footer>
    </>
  );
}

export default App;
