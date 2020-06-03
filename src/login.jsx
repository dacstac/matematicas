import * as React from 'react';
import './style.css';
import firebase from './firebase.js';
import { changePage } from './index';



export default class LogIn extends React.Component {
  constructor(){
    super()
    this.state = { 
        user: "",
        password: "",
        passOperations: false
    }
  }

  login(){
    if(this.state.user.trim().length<=0){
      console.log("Debes introducir un nombre");
    }else{
      if(this.state.password.trim().length<=0){
        console.log("Debes introducir una contraseña");
      }else{
        firebase.auth().signInWithEmailAndPassword(this.state.user,this.state.password)
        .then(() => {
          console.log("El usuario es correcto");
          //this.props.navigation.navigate("Operaciones.js");
          //console.log("enviando a operaciones");
          console.log("changePage: ",changePage);
          console.log("changePage.valueOf: ",changePage.valueOf())
          changePage = false;
          console.log("changePage2: ",changePage);
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }
      
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          if (error.code === "auth/user-not-found") {
            console.log('There is no user record corresponding to this identifier.!');
          }

          if (error.code === "auth/wrong-password") {
            console.log('The password is invalid or the user does not have a password!');
          }
        });
      }
    }
  }
  
  logInUser (event) { 
    this.setState ({user: event.target.value})
  }

  logInPassword (event) { 
    this.setState ({password: event.target.value})
  }
  
  render() {
    return(
      <div>
        <input placeholder="email" type="text" value={this.state.user} onChange = {this.logInUser.bind(this)}></input>
        <input placeholder="password" type="password" value={this.state.password} onChange = {this.logInPassword.bind(this)}></input>
        <button onClick={()=>{this.login()}} >Log In</button>
      </div>
    )
  }
}