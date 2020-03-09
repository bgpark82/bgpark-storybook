import React from 'react'
import Skeleton from './Skeleton'
import styled from '@emotion/styled'

export default {
    title : 'component|skeleton',
    component: Skeleton
}

export function skeleton() {
    return (
        <Skeleton />
    )
}

export const circle = () => <Skeleton circle width="5rem" height="5rem"/> 

export const Item = () =>{
    return(
    <ItemBlock>
        <Skeleton width="20rem" height="20rem"/> 
        <div className='card-body'>
            <Skeleton circle width="6rem" height="6rem" marginRight="1rem"/>
            <div className="card-title">    
                <Skeleton width="13rem"/>
                <Skeleton width="13rem"/>
                <Skeleton width="13rem"/>
                <Skeleton width="13rem"/>
            </div>
        </div>
        
    </ItemBlock>
    )
    
}
const ItemBlock = styled.div`
    padding:2rem;

    .card-body {
        padding:1rem 0;
        display:flex;
    }
    .card-title {
        div + div {
            margin-top:0.5rem
        }
    }
`