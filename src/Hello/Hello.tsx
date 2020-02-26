import React from 'react';

export type HelloProps = {
    name?:string,
    onHello?: ()=>void
}

const Hello = ({name, onHello}:HelloProps) => {
    return <h1 onClick={onHello}>{name}</h1>
}

export default Hello;