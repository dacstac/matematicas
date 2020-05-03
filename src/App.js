import React from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from  './login.jsx';
import Register from './register.jsx';

function App() {
  return (
    <div className="App">
      <div>
        <div>
            <Auth />
          </div>
          <div>
            <Register />
          </div>
          
      </div>
    </div>
  );
}

export default App;
