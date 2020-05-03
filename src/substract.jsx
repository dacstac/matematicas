import React from 'react'
import './style.css'

export default class SubstractNums extends React.Component {
 
  constructor(){
    super()
    this.state = { 
        num1: 0, 
        num2: 0, 
        total: "",
        valueInput: "",
        respuesta: ""
    }
  }

  makeOperation(){
    this.setState({ total: this.state.num1 - this.state.num2});
    console.log("makeOperation: ",this.state);
  }

  handleChange (event) { 
    this.setState ({valueInput: parseInt(event.target.value)}) 
    this.makeOperation();
  }

  changeDifficulty1(){
    let numGenerate = Math.floor(Math.random() * 10) + 1
    this.setState ({num1 : numGenerate});
    this.setState ({num2 :Math.floor(Math.random() * numGenerate) + 1});
    this.makeOperation();
  }
  changeDifficulty2(){
    let numGenerate = Math.floor(Math.random() * 100) + 1
    this.setState ({num1 : numGenerate});
    this.setState ({num2 :Math.floor(Math.random() * numGenerate) + 1});
    this.makeOperation();
  }
  changeDifficulty3(){
    let numGenerate = Math.floor(Math.random() * 1000) + 1
    this.setState ({num1 : numGenerate});
    this.setState ({num2 :Math.floor(Math.random() * numGenerate) + 1});
    this.makeOperation();
  }

  exe1(){
    console.log("Num1: ", this.state.num1, " - Num2: ", this.state.num2, " - Total: ",this.state.total, " - Result: ",this.state.valueInput)
    if(this.state.valueInput === this.state.total){
      this.setState({respuesta: "Correcto"});
    }else{
      this.setState({respuesta: "Incorrecto"});
    }
    console.log("exe1: ",this.state)
  }
 
  render() {
    return(
      <div>
        <div className="operation">
          <h1>Substract Two Numbers</h1>
  
          <p className="number">{this.state.num1}</p>
  
          <p className="number">{this.state.num2}</p>
          <input
          type="number"
          value={this.state.inputValue}
          onChange = {this.handleChange.bind(this)}
          />
          <button onClick={()=>{this.exe1()}} >Substract Numbers</button>
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