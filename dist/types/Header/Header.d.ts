/// <reference types="react" />
declare type HeaderProps = {
    header: Item[];
    buttonText: string;
    hideButton?: boolean;
    logoText?: string;
    profileUrl?: string;
    hideProfile?: boolean;
    onClickLogo?: () => void;
    onClickItem?: () => void;
    onClickButton?: () => void;
    onClickProfile?: () => void;
};
export declare type Item = {
    name?: string;
    text?: string;
};
declare const Header: {
    ({ onClickLogo, onClickItem, onClickButton, onClickProfile, header, buttonText, hideButton, logoText, profileUrl, hideProfile }: HeaderProps): JSX.Element;
    defaultProps: {
        buttonText: string;
        logoText: string;
        hideButton: boolean;
        hideProfile: boolean;
    };
};
export default Header;
