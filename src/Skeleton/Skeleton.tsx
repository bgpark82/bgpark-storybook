/** @jsx jsx */
import styled from '@emotion/styled'
import { gray } from '../theme'
import {jsx, css, keyframes} from '@emotion/core'
import globalStyle from '../globalStyle'

type SkeletonProps = {
    /** Skeleton 높이 */
    height: string|number,
    /** Skeleton 넓이 */
    width?: string|number,
    /** Skeleton 원 */
    circle:boolean,
    /** Skeleton 오른쪽 마진 */
    marginRight?:string|number,
    /** custom Skeleton */
    className?:string,
}

function Skeleton({height, width, circle, className, marginRight}:SkeletonProps) {
    return (
        <Block css={[globalStyle,{height},{width},{marginRight}]} circle={circle} className={className}> 
            
        </Block>
    )
}

Skeleton.defaultProps = {
    height:"1rem",
    circle: false,
}

const shining = keyframes`
    0% { opacity:0.5}
    50% { opacity:1}
    100% { opacity:0.5}
`

const Block = styled.div<{circle:boolean}>`

    background:${gray.sub};
    border-radius: 2px;
    animation: ${shining} 1s ease-in-out infinite;


    ${props => props.circle && css`
        border-radius:50%;
    `}
`


export default Skeleton
