/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Fragment } from 'react';
import { animated, useTransition } from 'react-spring';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';

type DialogProps = {
    /** 제목 */
    title?:string,
    /** 설명 */
    description?:string,
    /** 취소버튼 활성화 */
    cancelable?:boolean
    /** 취소 버튼 텍스트 */
    cancelText:string
    /** 확인 버튼 텍스트*/
    confirmText:string,
    /** 설명 아래 추가 메세지 */
    children?:React.ReactNode
    /** 버튼 숨기기 */
    hideButton?:boolean
    /** Dialog 숨기기 */
    visible?:boolean,
    /** 취소 버튼 클릭 */
    onCancel?: () => void;
    /** 확인 버튼 클릭 */
    onConfirm?: () => void;

}
const Dialog = ({title, description, cancelable,cancelText,confirmText,children, hideButton, visible, onCancel, onConfirm}:DialogProps) => {
    const fadeTransition = useTransition(visible, null,{
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0}
    })

    const slideUpTransition = useTransition(visible, null, {
        from: {
            transform: 'translateY(200px) scale(0.8)',
            opacity:0
        },
        enter: {
            transform: 'translateY(0px) scale(1)',
            opacity:1
        },
        leave: {
            transform: 'translateY(200px) scale(0.8)',
            opacity:0
        },
        config: {
            tension: 200,
            friction: 10
        }
    })

    console.log(slideUpTransition)

    
    return(
    <Fragment>
        {fadeTransition.map(({item, key, props}) => 
            item ? (
                <animated.div 
                    css={[fullScreen, darkBackground]}
                    key={key}
                    style={props}
                ></animated.div>
            ): null
        )}
        

        {slideUpTransition.map(({item, key,props}) =>
            item ? (
                <animated.div 
                    css={[fullScreen, whiteBoxWrapper]}
                    style={props}
                    key={key}
                >
                    <div css={whiteBox}>
                        {title && <h3>{title}</h3>}
                        {description && <p>{description}</p>}
                        {children}
                        {hideButton || <ButtonGroup css={style} rightAlign>
                            {cancelable && <Button onClick={onCancel} theme="tertiary">{cancelText}</Button>}
                            <Button onClick={onConfirm}>{confirmText}</Button>
                        </ButtonGroup>}
                    </div>
                </animated.div>
            ) : null
        )}
    </Fragment>
  );
}

Dialog.defaultProps = {
    cancelText:'취소',
    confirmText:'확인'
}

const fullScreen = css`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
`

const darkBackground = css`
    background: rgba(0,0,0,0.5);
    z-index:10;
`
const whiteBoxWrapper = css`
    z-index:15;
    display: flex;
    align-items:center;
    justify-content: center;
`
const whiteBox = css`
    box-sizing:border-box;
    border-radius:4px;
    width:25rem;
    background:white;
    box-shadow: 0px 4px 8px 8px rgba(0,0,0,0.05);
    padding: 2rem;
    h3 {
        font-size:1.5rem;
        color: #343a40;
        margin-top: 0;
        margin-bottom: 1rem;
    }
    p {
        font-size: 1rem;
        margin: 0;
        color: #868e96;
    }
`   
const style = css`
    margin-top:3rem;
`

export default Dialog;