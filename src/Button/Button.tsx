/** @jsx jsx */
import {jsx, css} from '@emotion/core'

type ButtonProps = {
    /** 버튼 안의 내용 */
    children: React.ReactNode,
    /** 버튼의 theme */
    theme: 'primary' | 'secondary' | 'tertiary',
    /** 버튼의 크기 */
    size: 'small' | 'medium' | 'large',
    /** 버튼 비활성화 */
    disabled?: boolean,
    /** 버튼 너비 */
    width?: string|number,
    /** 버튼 Click 이벤트  */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({children, theme, size, disabled, width, onClick}:ButtonProps) => {
    return(
        <button css={[style, themes[theme], sizes[size], {width}]} 
                disabled={disabled}
                onClick={onClick}
        >{children}</button>
    )
}

Button.defaultProps = {
    theme: 'primary',
    size: 'medium'
}

const style = css`
    outline:none;
    border:none;
    box-sizing: border-box;
    height:2rem;
    font-size:0.875rem;
    padding: 0.5rem;
    background: #20c997;
    color:white;
    border-radius:0.25rem;
    line-height:1;
    font-weight:600;
    &:focus {
        box-shadow: 0px 0px 6px rgba(0,0,0,0.2);
    }
    &:disabled {
        cursor:not-allowed;
    }
`

const themes = {
    primary : css`
        background: #20c997;
        color:white;
        &:hover:enabled {
        background: #38d9a9;
        }
        &:active:enabled{
            background: #12b886;
        }
        &:disabled{
            background: #aed9cc;
        }
    `,
    secondary: css`
        background: #e9ecef;
        color: #343a40;
        &:hover:enabled {
            background: #f1f3f5;
        }
        &:active:enabled {
            background: #dee2e6;
        }
        &:disabled {
          color: #c6d3e1;
        }
    `,
    tertiary: css`
        background: none;
        color: #20c997;
        &:hover:enabled {
            background: #e6fcf5;
        }
        &:active:enabled {
            background: #c3fae8;
        }
        &:disabled {
            color: #bcd9d0;
        }
    `
}

const sizes = {
    small:css`
        height: 1.75rem;
        font-size: 0.75rem;
        padding: 0 0.875rem;
    `,
    medium:css`
        height: 2.5rem;
        font-size: 1rem;
        padding: 0 1rem;
    `,
    large:css`
        height: 3rem;
        font-size: 1.125rem;
        padding: 0 1.5rem;
    `
}

export default Button;