import React from 'react';
// import Radium from 'radium';

//import styled from 'styled-components';
import classes from './Person.css';
//when you dont run the command npm run eject you can easily do it like this -> import classes from './Person.module.css';
//      

// class Person extends Component {
//     render(){
//         return(
//             <h1>Test Person</h1>
//         );
//     }
// }
// const StyledDiv = styled.div`
//     width: 60%;
//     margin: 16px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;
//     cursor: pointer;
//     :hover {
//         background-color: grey;
        
//     }

//     @media (min-width: 500px) {
//         width: 450px;
//     }
//     `;

const person = (props) => {

    const rnd = Math.random();
    if (rnd > 0.7 ) {
        throw new Error(' Somwthing went wrong')
    }

    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };

    return(
        // <div className="Person" style={style}>
        <div className={classes.Person}>
            <p onClick={props.click}> 
            Im {props.name} and i am {props.age} years old
            </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
            
        
    )
}

export default person;