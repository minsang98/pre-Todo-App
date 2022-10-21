import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import styled from 'styled-components';

const Count = styled.div``;

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Count>
          {count}
          <div className="event-box">
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
          </div>
        </Count>
      </header>
    </div>
  );
}

export default App;
