import React from 'react'

const Hello = ({name, onHello}) => {
    return <h1 onClick={onHello}>{name}</h1>
}

export default Hello;