/// <reference types="react" />
declare type ItemProps = {
    /** 이미지 보이기 */
    hideImage?: boolean;
    /** 이미지 */
    image?: string;
    /** 이미지 타이틀 */
    title?: string;
    /** 이미지 설명 */
    description?: string;
    /** 자식 컴포넌트 */
    children?: React.ReactNode;
    /** Custom Item */
    className?: string;
    /** 아이템 넓이 */
    width?: number | string;
};
declare const Item: {
    ({ hideImage, image, title, description, children, className, width }: ItemProps): JSX.Element;
    defaultProps: {
        hideImage: boolean;
        title: string;
        description: string;
    };
};
export default Item;
