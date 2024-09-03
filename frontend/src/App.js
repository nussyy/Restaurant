// import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage/HomePage'; 
import Header from './components/Header';

function App() {
  return (
    <div className="App">
            <Header />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header/>
      <HomePage /> 
    </div>
  );
}

export default App;