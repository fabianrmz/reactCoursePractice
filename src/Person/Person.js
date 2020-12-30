import React from 'react';
import './Person.css';
// class Person extends Component {
//     render(){
//         return(
//             <h1>Test Person</h1>
//         );
//     }
// }

const person = (props) => {

    return(
        <div className="Person">
            <p onClick={props.click}> Im {props.name} and i am {props.age} years old</p>
            <input type="text" onChange={props.changed} value={props.name}/>
            <p>{props.children}</p>
        </div>
    )
}

export default person;