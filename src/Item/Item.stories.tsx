/** @jsx jsx */
import { jsx } from '@emotion/core'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import Item from './Item'

export default {
    title:'component|item',
    component:Item,
    decorators:[withKnobs]
}

export const item = () => {
    const title = text('title','타이틀')
    const description = text('description','이미지 설명하는 란')
    const image = text('image','');
    const hideImage = boolean('hideImage',false);
    const width = text('width','');

    return(
        <Item title={title} description={description} image={image} hideImage={hideImage} width={width}/>
    )
}

export const itemWithoutImage = () => <Item hideImage/>

export const itemWidth = () => <Item width="30rem"/>