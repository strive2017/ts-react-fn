import React from 'react'

interface Greeting {
    name : string;
    firstName? : string;
    lastName? : string;
}


// const Hello = (props:Greeting) => <div>Hello {props.name}</div>

const Hello : React.FC<Greeting> = ({
    name,
    firstName,
    lastName,
}) => <div>Hello {name}</div>

Hello.defaultProps = {
    firstName : '',
    lastName : '',
}

export default Hello