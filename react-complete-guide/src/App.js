import React, { Component } from 'react';
//import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons : [
      {id: 'asdfe3', name : 'Fabian', age: '10'},
      {id: 'asd4534', name : 'Erik', age: '130'}, 
      {id: 'asd45f', name : 'Raul', age: '14'}
    ],
    otherState: "some other value",
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   console.log("was clicked")
  //   this.setState({
  //     persons : [
  //       {name : newName, age: '20'},
  //       {name : 'Erick', age: '34'}, 
  //       {name : 'Rul', age: '22'}
  //     ],
  //     otherState: "some other value",
  //   })
  // }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons})

  }

  deletePersonHandler = (personsIndex) => {
    //console.log("delete")
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personsIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    console.log("toggle")
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});

  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    
    if ( this.state.showPersons ){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                    click={() => this.deletePersonHandler(index)}
                    name={person.name} 
                    age={person.age}
                    key={person.id} 
                    changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div> 
      );
    }

    return (
      <div className="App">
       <h1>Hi, I'm a react app title</h1>
       <p>this is really working!</p>
       <button style={style} onClick={ this.togglePersonsHandler}>Toggle persons</button>
       {persons}
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}
export default App;

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