/// <reference types="react" />
import * as icons from './svg';
declare type IconType = keyof typeof icons;
declare type IconProps = {
    /** 아이콘 타입 */
    icon: IconType;
    /** 아이콘 색상 */
    color?: string;
    /** 아이콘 크기 */
    size?: string | number;
    className?: string;
};
declare const Icon: ({ icon, color, size, className }: IconProps) => JSX.Element;
export default Icon;
export declare const iconTypes: IconType[];
