/** @jsx jsx */
import { css, jsx } from '@emotion/core'

type ButtonGroupProps = {
    /** 버튼 그룹 내 버튼 */
    children:React.ReactNode
    /** 버튼 정렬 방향 */
    direction:'row'|'column',
    /** 버튼 우측 정렬 */
    rightAlign?: boolean,
    /** 버튼 사이 간격 */
    gap: string|number
    /** 버튼 커스터마이징 */
    className?:string
}

const ButtonGroup = ({children, direction, rightAlign, gap, className}: ButtonGroupProps) => {
    return(
        <div css={[style, flex[direction], rightAlign && rightAlignStyle, gapStyle(direction, gap)]} className={className}>
            {children}
        </div>
    )
}

ButtonGroup.defaultProps = {
    direction:'row',
    gap: '0.5rem'
}

const style = css`
    display:flex;
`

const flex = {
    row:css`
        flex-direction:row;
    `,
    column:css`
        flex-direction:column;
    `
}

const rightAlignStyle = css`
    justify-content:flex-end;
`

const gapStyle = (direction: 'row'|'column' ,gap: string|number) => {
    const marginType = direction === 'row' ? 'marginLeft' : 'marginTop'
    return css({
        'button + button': {
            [marginType]: gap
        }
    })
}

export default ButtonGroup;