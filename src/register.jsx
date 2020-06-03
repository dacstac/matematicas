import * as React from 'react';
import firebaseConf from './firebase.js';
import './style.css';
//import database from '@react-native-firebase/database';
export default class LogIn extends React.Component {
  constructor(){
    super()
    this.state = { 
        user: "",
        password: "",
        passwordRepeat: "",
        datos : []
    }
  }

  register(){
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
                    firebaseConf.auth().createUserWithEmailAndPassword(this.state.user,this.state.password)
                    .then(() => {
                      console.log("El usuario se ha creado correctamente");
                      const db = firebaseConf.firestore().collection("seguimiento").doc(this.state.user);
                      db.set({
                        add1: false,
                        add2: false,
                        add3: false,
                        substract1: false,
                        substract2: false,
                        substract3: false,
                        multiply1: false,
                        multiply2: false,
                        multiply3: false,
                        divide1: false,
                        divide2: false,
                        divide3: false
                      })
                      console.log("Añadido a la base de datos");
                    //this.props.navigation.navigate("Operaciones");
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

  prueba2 = e =>{
    console.log("Entro en prueba2");
    const db = firebaseConf.firestore();
    const userRef =db.collection("seguimiento").doc("prueba");
    userRef.get().then(function(doc) {
      if (doc.exists) {
          console.log("Datos 1º vez:", doc.data());
          userRef.update({
            suma1: true
          });
      } else {
        console.log("No existe en la base de datos");
      }
    }).catch(function(error) {
        console.log("Se ha producido un error:", error);
    });
    userRef.get().then(function(doc) {
      if (doc.exists) {
          console.log("Datos 2º vez:", doc.data());
      } else {
        console.log("No existe en la base de datos");
      }
    }).catch(function(error) {
        console.log("Se ha producido un error:", error);
    });
  }
  
  render() {
    return(
      <div>
        <input placeholder="email" type="text" value={this.state.user} onChange = {this.registerUser.bind(this)}></input>
        <input placeholder="password" type="password" value={this.state.password} onChange = {this.registerPassword.bind(this)}></input>
        <input placeholder="repeat the password" type="password" value={this.state.passwordRepeat} onChange = {this.registerPasswordRepeat.bind(this)}></input>
        <button onClick={()=>{this.register()}} >Register</button>
        <button onClick={()=>{this.prueba2()}} >Mostrar</button>
      </div>
    )
  }
  }