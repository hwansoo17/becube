"use client";
import { useState } from "react";

const Home = () => {
  const [counter, setCounter] = useState(0);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState('');

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  const handleSum = () => {
    const sum = parseInt(input1) + parseInt(input2);
    setResult(isNaN(sum) ? '' : sum);
  };

  return (
    <div style={styles.app}>
      <div id="counter" style={styles.counter}>{counter}</div>
      <button onClick={incrementCounter} style={styles.button}>더하기</button>
      <button onClick={decrementCounter} style={styles.button}>감소</button>

      <div className="plus" style={{display:'flex', flexDirection: 'row', alignItems: 'center'}}>
        <input
          type="number"
          id="input1"
          placeholder="0"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          style={styles.input}
        />
        <div style={{fontSize: '20px'}}>+</div>
        <input
          type="number"
          id="input2"
          placeholder="0"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSum} style={styles.button}>=</button>
        <text id="result" style={styles.result}>{result}</text>
      </div>
    </div>
  );
}

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#000',
  },
  counter: {
    fontSize: '2em',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: 'orange',
    fontSize: '1em',
    padding: '10px 20px',
    margin: '5px',
  },
  input: {
    fontSize: '20px',
    padding: '10px',
    margin: '5px',
    width: '60px',
    color: '#fff',
    backgroundColor: '#000',
  },
  result: {
    fontSize: '20px',
    color: '#fff',
  }
};

export default Home;