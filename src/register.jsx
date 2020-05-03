import React, { useState, useEffect } from 'react';
import firebase from './firebase.js';
import './style.css';
export default class LogIn extends React.Component {
  constructor(){
    super()
    this.state = { 
        user: "",
        password: "",
        passwordRepeat: ""
    }
  }

  login(){
      if(this.state.user.trim().length<=0){
        console.log("Debes escribir un nombre de usuario");
      }else{
        if(this.state.password.trim().length<=0 || this.state.passwordRepeat.trim().length<=0){
            console.log("Debes escribir una contraseña");
        }else{
            if(this.state.password.length<6 || this.state.passwordRepeat.length<6){
            console.log("La contraseña debe al menos tener 6 caracteres");
            }else{
                if(this.state.password !== this.state.passwordRepeat){
                    console.log("Debes escribir la misma contraseña");
                }else{
                    firebase.auth().createUserWithEmailAndPassword(this.state.user,this.state.password)
                    .then(() => {
                    console.log("El usuario se ha creado correctamente");
                    this.props.navigation.navigate("Operaciones");
                    }).catch(error => {
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
      }
    
  }
  
  registerUser (event) { 
    this.setState ({user: event.target.value})
  }

  registerPassword (event) { 
    this.setState ({password: event.target.value})
  }

  registerPasswordRepeat (event) { 
    this.setState ({passwordRepeat: event.target.value})
  }

  prueba(){
    var database = firebase.database().ref('seguimiento/');
    console.log("database: ", database)
  }
  
  render() {
    return(
      <div>
        <input placeholder="email" type="text" value={this.state.user} onChange = {this.registerUser.bind(this)}></input>
        <input placeholder="password" type="password" value={this.state.password} onChange = {this.registerPassword.bind(this)}></input>
        <input placeholder="repeat the password" type="password" value={this.state.passwordRepeat} onChange = {this.registerPasswordRepeat.bind(this)}></input>
        <button onClick={()=>{this.login()}} >Register</button>
        <button onClick={()=>{this.prueba()}} >Mostrar</button>
      </div>
    )
  }
  }