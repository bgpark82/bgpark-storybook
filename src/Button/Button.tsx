/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import globalStyle from "../globalStyle";
import "../index";
import { color, gray } from "../theme";

type ButtonProps = {
    /** 버튼 안의 내용 */
    children: React.ReactNode;
    /** 버튼의 theme */
    theme: "primary" | "secondary" | "tertiary" | "bordered";
    /** 버튼의 크기 */
    size: "small" | "medium" | "large";
    /** 버튼 비활성화 */
    disabled?: boolean;
    /** 버튼 너비 */
    width?: string | number;
    /** 아이콘 버튼 */
    iconOnly?: boolean;
    /** 버튼 둥글기 */
    radius?: boolean;
    /** custom style */
    className?: string;
    /** 메인 색 */
    colorMain?: string;

    /** 버튼 Click 이벤트  */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({
    children,
    theme,
    size,
    disabled,
    width,
    onClick,
    iconOnly,
    radius,
    className
}: ButtonProps) => {
    return (
        <button
            css={[
                globalStyle,
                style,
                themes[theme],
                sizes[size],
                { width },
                radius && radiusStyle,
                iconOnly && [iconOnlyStyle, iconOnlySizes[size]]
            ]}
            disabled={disabled}
            onClick={onClick}
            className={className}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    theme: "primary",
    size: "small"
};

const style = css`
    cursor: pointer;
    outline: none;
    border: none;
    box-sizing: border-box;
    height: 2rem;
    font-size: 0.875rem;
    padding: 0.5rem;
    background: ${color.main};
    color: white;
    border-radius: 0.25rem;
    line-height: 1;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &:disabled {
        cursor: not-allowed;
    }
    svg {
        width: 1em;
        margin-right: 1em;
    }
`;

const themes = {
    primary: css`
        background: ${color.main};
        color: white;
        svg {
            fill: white;
        }
        &:hover:enabled {
            background: ${color.sub};
        }

        &:disabled {
            background: ${color.disabled};
        }
    `,
    secondary: css`
        background: ${gray.sub};
        color: ${gray.main};
        &:hover:enabled {
            background: ${gray.hover};
        }

        &:disabled {
            color: white;
            svg {
                fill: ${gray.hover};
            }
        }
    `,
    tertiary: css`
        background: none;
        color: ${color.main};
        border: 1.4px solid ${color.main};
        &:hover:enabled {
            color: ${color.hover};
            border-color: ${color.hover};
        }

        &:disabled {
            color: ${color.disabled};
            border-color: ${color.disabled};
            svg {
                fill: ${color.disabled};
            }
        }
    `,
    bordered: css`
        border: 1.4px solid ${gray.main};
        color: ${gray.main};
        background: none;
        &:hover:enabled {
            background: ${gray.main};
            color: white;
        }

        &:disabled {
            color: ${gray.disabled};
            border-color: ${gray.disabled};
            svg {
                fill: ${gray.disabled};
            }
        }
    `
};

const sizes = {
    small: css`
        height: 1.75rem;
        font-size: 1rem;
        padding: 0 0.875rem;
    `,
    medium: css`
        height: 2rem;
        font-size: 1rem;
        padding: 0 1rem;
    `,
    large: css`
        height: 2.25rem;
        font-size: 1.125rem;
        padding: 0 1.25rem;
    `
};

const iconOnlyStyle = css`
    border-radius: 50%;
    padding: 0;
    svg {
        margin: 0;
    }
`;

const iconOnlySizes = {
    small: css`
        width: 1.75rem;
    `,
    medium: css`
        width: 2.5rem;
    `,
    large: css`
        width: 3rem;
    `
};

const radiusStyle = css`
    border-radius: 4rem;
`;

export default Button;
