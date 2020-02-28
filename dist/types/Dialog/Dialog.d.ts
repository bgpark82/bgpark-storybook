/// <reference types="react" />
declare type DialogProps = {
    /** 제목 */
    title?: string;
    /** 설명 */
    description?: string;
    /** 취소버튼 활성화 */
    cancelable?: boolean;
    /** 취소 버튼 텍스트 */
    cancelText: string;
    /** 확인 버튼 텍스트*/
    confirmText: string;
    /** 설명 아래 추가 메세지 */
    children?: React.ReactNode;
    /** 버튼 숨기기 */
    hideButton?: boolean;
    /** Dialog 숨기기 */
    visible?: boolean;
    /** 취소 버튼 클릭 */
    onCancel?: () => void;
    /** 확인 버튼 클릭 */
    onConfirm?: () => void;
};
declare const Dialog: {
    ({ title, description, cancelable, cancelText, confirmText, children, hideButton, visible, onCancel, onConfirm }: DialogProps): JSX.Element;
    defaultProps: {
        cancelText: string;
        confirmText: string;
    };
};
export default Dialog;
