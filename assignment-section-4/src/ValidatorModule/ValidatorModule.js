import React from 'react';

const ValidatorModule = (props) => {
    const length = props.length;
    let text = "Text too short";
    if (length>5){
        text = "Text long enough";
    }
    return (
        <>
        <p>{text}</p>
        </>
    );
}

export default ValidatorModule;