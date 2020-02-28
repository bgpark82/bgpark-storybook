/// <reference types="react" />
declare type ButtonGroupProps = {
    /** 버튼 그룹 내 버튼 */
    children: React.ReactNode;
    /** 버튼 정렬 방향 */
    direction: 'row' | 'column';
    /** 버튼 우측 정렬 */
    rightAlign?: boolean;
    /** 버튼 사이 간격 */
    gap: string | number;
    /** 버튼 커스터마이징 */
    className?: string;
};
declare const ButtonGroup: {
    ({ children, direction, rightAlign, gap, className }: ButtonGroupProps): JSX.Element;
    defaultProps: {
        direction: string;
        gap: string;
    };
};
export default ButtonGroup;
