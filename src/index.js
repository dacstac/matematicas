import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Auth from  './login.jsx';
import Register from './register.jsx';
import Add from './add.jsx';
import Substract from './substract.jsx';
import Multiply from './multiply.jsx';
import Divide from './divide.jsx';
import * as serviceWorker from './serviceWorker';

export var changePage = false;

export function change(){
  if(changePage===false){
    changePage = true;
  }else{
    changePage = false;
  }
  console.log("change: ",changePage)
}

function UserLog(props) {
  
  return <div className="App">
  <div>
    <div>
        <Auth />
      </div>
      <div>
        <Register />
      </div>
      <button onClick={()=>{change()}} >cambiar</button>
  </div>
</div>;
}

function Operations(props) {
  return <div className="App">
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
</div>;
}
function Change() {
  if (changePage) {
    return <UserLog />;
  }else{
    return <Operations />;
  }
}

ReactDOM.render(
  <Change changePage={true} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
