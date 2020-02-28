/// <reference types="react" />
export declare type HelloProps = {
    name?: string;
    onHello?: () => void;
};
declare const Hello: ({ name, onHello }: HelloProps) => JSX.Element;
export default Hello;
