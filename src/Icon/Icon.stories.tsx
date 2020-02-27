/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import Icon, { iconTypes } from './Icon'

export default {
    title:'component|icon',
    component:Icon
}

export const icon = () => <Icon icon="heart"/>

export const size = () => <Icon icon="heart" size="2rem"/>

export const color = () => <Icon icon="heart" color="red"/>

export const customStyle = () => <Icon icon="heart" css={{width:'2rem'}}/>

export const iconList = () => {
    return(
        <ul css={iconListStyle}>
           {iconTypes.map(icon => (
               <li key={icon}>
                   <Icon icon={icon}/>
                   {icon}
               </li>
           ))} 
        </ul>
    )
}

const iconListStyle = css`
    list-style:none;
    display:flex;
    flex-wrap:wrap;
    li {
        box-sizing:border-box;
        width:25%;
        padding:1rem;
        display:flex;
        svg {
            margin-right:1rem;
        }
    }
`