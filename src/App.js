import React, { Component } from 'react';
//import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person'


// const app = props => {
//     const [personsState, setPersonsState] = useState({
//       persons : [
//         {name : 'Fabian', age: '10'},
//         {name : 'Erik', age: '130'}, 
//         {name : 'Raul', age: '14'}
//       ],
//       otherState : 'some other value'
//     });

//     const [otherState, setOtherState] = useState('some other value');
//     console.log(personsState, otherState);

//     const switchNameHandler = () => {
      
//       setPersonsState({
//         persons : [
//           {name : 'Fabian', age: '20'},
//           {name : 'Erick', age: '34'}, 
//           {name : 'Rul', age: '22'}
//         ],
//         otherState: personsState.otherState
//       });
//     };

//     return (
//       <div className="App">
//        <h1>Hi, I'm a react app title</h1>
//        <p>this is really working!</p>
//        <button onClick={ switchNameHandler}>Switch name</button>
//        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: racing</Person>
//        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
//       </div>
//     );
//     // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this work now?'))
 
// }

//export default app;

class App extends Component {
  state = {
    persons : [
      {name : 'Fabian', age: '10'},
      {name : 'Erik', age: '130'}, 
      {name : 'Raul', age: '14'}
    ]
  }

  switchNameHandler = (newName) => {
    console.log("was clicked")
    this.setState({
      persons : [
        {name : newName, age: '20'},
        {name : 'Erick', age: '34'}, 
        {name : 'Rul', age: '22'}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons : [
        {name : 'Fabian', age: '20'},
        {name : event.target.value, age: '34'}, 
        {name : 'Rul', age: '22'}
      ]
    })

  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
       <h1>Hi, I'm a react app title</h1>
       <p>this is really working!</p>
       <button style={style} onClick={() => this.switchNameHandler('Fabián!!!!!')}>Switch name</button>
       <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
       <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Fabian!')}
        changed={this.nameChangeHandler}>
          My Hobbies: racing
        </Person>
       <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}
export default App;


