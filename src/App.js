import React from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from  './login.jsx';
import Register from './register.jsx';
import Add from './add.jsx';
import Substract from './substract.jsx';
import Multiply from './multiply.jsx';
import Divide from './divide.jsx';
import ReactDOM from 'react-dom';
import LogIn from './register.jsx';


/*function App() {
  return (
    <div className="App">
      <div>
        <div>
            <Auth />
          </div>
          <div>
            <Register />
          </div>
          <button onClick={()=>{this.Operations()}} >Prueba Enviar</button>
      </div>
    </div>
  );
}

export function Operations(){
  return (
    <div className="App">
        <div>
          <Add />
        </div>
        <div>
          <Substract />
        </div>
        <div>
          <Multiply />
        </div>
        <div>
          <Divide />
        </div>
    </div>
  );
}

export default App;*/

var init = false;
/*export default class App extends React.Component {
  render(){
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
}*/

function UserLogin(props) {
  return <LogIn></LogIn>;
}

function Operations(props) {
  return <Add></Add>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserLogin />;
  }
  return <Operations />;
}

ReactDOM.render(
  <Greeting isLoggedIn={true} />,
  document.getElementById('root')
);