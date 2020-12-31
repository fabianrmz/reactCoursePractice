
import React, { Component } from 'react';
import './App.css';
import Validator from './ValidatorModule/ValidatorModule';
import Char from './Char/Char'

class App extends Component {
  state = {
    userInput : ""
  }
  

  userInputHandler = (event) => {
    this.setState({
      userInput: event.target.value
    });
  }

  removeCharHandler = (index) => {
    console.log(index);
    let newWord = this.state.userInput.split("");
    newWord.splice(index, 1);
    this.setState({
      userInput: newWord.join("")
    });
    
  }

  

  render () {
    let chars = null;
    if (this.state.userInput.length>0){
      let word = this.state.userInput.split("");
      
      chars = (
        <div>
          {word.map((char, index) => {
            return <Char 
                    key={index} 
                    letter={char} 
                    click={() => this.removeCharHandler(index)}
                    ></Char>
          })}
        </div>
      );
    }
    return (
      <div className="App">
       <h1>This is the assignment for section 4</h1>
       <p>Input: {this.state.userInput}</p>
       <p>Length: {this.state.userInput.length}</p>
       <input type={"text"} onChange={(event) => this.userInputHandler(event)} value={this.state.userInput}></input>
       <Validator length={this.state.userInput.length}/>
       {chars}
      </div>
    );

  }
  
}

export default App;
