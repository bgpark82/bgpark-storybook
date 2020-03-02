/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Button from '../Button/Button';
import Item from '../Item/Item';

type HeaderProps = {
    header: Item[],
    buttonText:string,
    hideButton?:boolean,
    logoText?:string,
    profileUrl?:string
    hideProfile?:boolean
    onClickLogo?:()=>void,
    onClickItem?:()=>void
    onClickButton?:()=>void
    onClickProfile?:()=>void
}

export type Item = {
    name?:string,
    text?:string
}

const Header = ({onClickLogo, onClickItem, onClickButton, onClickProfile, header, buttonText, hideButton, logoText, profileUrl, hideProfile}:HeaderProps) => {
  

  return(
    <div css={container}>
        <div css={logo} onClick={onClickLogo}>{logoText}</div>
        <div css={list}>
        {header.map(item => (
            <div css={listItem} key={Item.name} onClick={onClickItem}>{item.text}</div>
        ))}
        </div>
        <div css={right}>
            {!hideButton && <Button theme="bordered" size="medium" radius onClick={onClickButton}>{buttonText}</Button>}
            <div>
                {!hideProfile && <img src={profileUrl} alt="" onClick={onClickProfile}/>}
            </div>
        </div>
    </div>
  );
}

Header.defaultProps = {
    buttonText:'로그인',
    logoText:"Let's shadow",
    hideButton:false,
    hideProfile:false
}

const container =  css`
    display:flex;
    align-items:center;
    justify-content:space-between;
    font-weight:800;
    padding:0.75rem 1rem;
    border-bottom: 1px solid rgb(233, 236, 239);
    & > div {
        cursor:pointer;
        color:#424242;
        text-decoration:none;
    }
`

const logo = css`
    font-size:1.125rem;  
    &:hover {
        color: #495057;
    }
` 

const list = css`
    display:flex;
`

const listItem = css`
    white-space:pre;
    &:hover {
        color: #495057;
    }
    & + & {
        margin-left:2rem;
    }
`

const right = css`
    display:flex;
    align-items:center;
    & > button {
        margin-right:0.5rem;
    }
    & img {
        display:block;
        height:2.5rem;
        width:2.5rem;
        object-fit:cover;
        border-radius:50%;
        box-shadow: 0px 0px 8px rgba(0,0,0,0.086);
    }
`

export default Header;