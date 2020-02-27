/** @jsx jsx */
import {jsx, css} from '@emotion/core'

type ButtonProps = {
    /** 버튼 안의 내용 */
    children: React.ReactNode,
    /** 버튼의 theme */
    theme: 'primary' | 'secondary' | 'tertiary',
}

const Button = ({children, theme}:ButtonProps) => {
    return(
        <button css={[style, themes[theme]]}>{children}</button>
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
    &:hover {
        background: #38d9a9;
    }
    &:active{
        background: #12b886;
    }
`

const themes = {
    primary : css`
        background: #20c997;
        color:white;
        &:hover {
        background: #38d9a9;
        }
        &:active{
            background: #12b886;
        }
    `,
    secondary: css`
        background: #e9ecef;
        color: #343a40;
        &:hover {
            background: #f1f3f5;
        }
        &:active {
            background: #dee2e6;
        }
    `,
    tertiary: css`
        background: none;
        color: #20c997;
        &:hover {
            background: #e6fcf5;
        }
        &:active {
            background: #c3fae8;
        }
    `
}



export default Button;