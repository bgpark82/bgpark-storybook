/** @jsx jsx */
import { css, jsx } from '@emotion/core';

type ItemProps = {

    /** 이미지 보이기 */
    hideImage?:boolean,
    /** 이미지 */
    image?:string,
    /** 이미지 타이틀 */
    title?:string,
    /** 이미지 설명 */
    description?:string
    /** 자식 컴포넌트 */
    children?:React.ReactNode;
    /** Custom Item */
    className?:string
    /** 아이템 넓이 */
    width?:number|string
    
}
const Item = ({hideImage, image, title, description, children, className,width}:ItemProps) => {
  
  return(
    <div css={[itemBox,{width}]} className={className}>
        {!hideImage && <div css={thumbnail}>
            <img src={image} alt="image"/>
        </div>}
        <div css={contents}>
            <h2>{title}</h2>
            <p>{description}</p>
            {children}
        </div>
    </div>
  );
}

Item.defaultProps ={
    hideImage:false,
    title:'이미지',
    description:'이미지 설명'
}

const itemBox = css`
    width:20rem;
    padding:1rem;
    display:flex;

    & + & {
        margin-top: 3rem;
    }
    &:hover {
        box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
    }
`

const thumbnail = css`
    background:black;
    margin-right:1rem;
    border-radius:4px;
    img {
        display:block;
        width: 10rem; 
        height: 6rem;
        object-fit:cover;
        border-radius:4px;
        cursor:pointer;
    }
`

const contents = css`

    margin-top:0.5rem;
    h2{
        margin: 0;
        cursor:pointer;
    }
    p {
        margin:0;
        line-height:1.5;
        margin-top:0.5rem;
        white-space: normal;
    }
    
`

export default Item;