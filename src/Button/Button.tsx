import React from 'react';

type ButtonProps = {
    children: React.ReactNode
}

const Hello = ({children}:ButtonProps) => {
    return(
        <button>{children}</button>
    )
}

export default Hello;