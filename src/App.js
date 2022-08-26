import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://github.com/AsmiAgarwal"
          target="_blank"
          rel="noopener noreferrer"
        >
          My First React App
        </a>
      <br></br>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          Made by @AsmiAgarwal
        </p>
      </header>
    </div>
  );
}

export default App;
