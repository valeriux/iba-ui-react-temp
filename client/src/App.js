import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Proof of concepts
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;
