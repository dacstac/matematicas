import React from 'react'
import './style.css'

export default class AddNums extends React.Component {
 
  constructor(){
    super()
    this.state = { 
        num1: Math.floor(Math.random() * 10) + 1, 
        num2: Math.floor(Math.random() * 10) + 1, 
        total:"",
        valueInput: "",
        respuesta: "",
    }
  }

  makeOperation(){
    this.setState({ total: this.state.num1 + this.state.num2});
  }

  handleChange (event) { 
    this.setState ({valueInput: parseInt(event.target.value)}) 
    this.makeOperation();
  } 

  changeDifficulty1(){
    this.setState ({num1 :Math.floor(Math.random() * 10) + 1});
    this.setState ({num2 :Math.floor(Math.random() * 10) + 1});
    this.makeOperation();
  }
  changeDifficulty2(){
    this.setState ({num1 :Math.floor(Math.random() * 100) + 1}); 
    this.setState ({num2 :Math.floor(Math.random() * 100) + 1});
    this.makeOperation(); 
  }
  changeDifficulty3(){
    this.setState ({num1 :Math.floor(Math.random() * 1000) + 1});
    this.setState ({num2 :Math.floor(Math.random() * 1000) + 1});
    this.makeOperation();
  }

  exe1(){
    console.log("Num1: ", this.state.num1, " - Num2: ", this.state.num2, " - Total: ",this.state.total, " - Result: ",this.state.valueInput);
    this.setState({ total: this.state.num1 + this.state.num2});
    if(this.state.valueInput === this.state.total){
      this.setState({respuesta: "Correcto"});
    }else{
        this.setState({respuesta: "Incorrecto"});
    }
    
    console.log(this.state)
  }
 
  render() {
    return(
      <div className="container">
        <div className="operation">
          <h1>Add Two Numbers</h1>
  
          <p className="number">{this.state.num1}</p>
  
          <p className="number">{this.state.num2}</p>
          <input
          type="number"
          value={this.state.inputValue}
          onChange = {this.handleChange.bind(this)}
          />
          <button onClick={()=>{this.exe1()}} >Add Numbers</button>
          <p>{this.state.respuesta}</p>
        </div>
        <div className="box">
        <button onClick={()=>{this.changeDifficulty1()}} >Easy</button>
        <button onClick={()=>{this.changeDifficulty2()}} >Normal</button>
        <button onClick={()=>{this.changeDifficulty3()}} >Hard</button>
        </div>
      </div>
    )
  }
}