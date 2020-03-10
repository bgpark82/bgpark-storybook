/// <reference types="react" />
import "../index";
declare type ButtonProps = {
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
declare const Button: {
    ({ children, theme, size, disabled, width, onClick, iconOnly, radius, className }: ButtonProps): JSX.Element;
    defaultProps: {
        theme: string;
        size: string;
    };
};
export default Button;
