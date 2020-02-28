/** @jsx jsx */
import { jsx } from '@emotion/core'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import Button from '../Button/Button'
import ButtonGroup from './ButtonGroup'

export default {
    title:'component|button group',
    component: ButtonGroup,
    decorators:[withKnobs]
}

export const buttonGroup = () => {

    const direction = select('direction',['row','column'], 'row');
    const rightAlign = boolean('rightAlign',false);
    const gap = text('gap','0.5rem')

    return(
        <ButtonGroup direction={direction} rightAlign={rightAlign} gap={gap}>
            <Button>BUTTON</Button>
            <Button>BUTTON</Button>
            <Button>BUTTON</Button>
        </ButtonGroup>
    )
}

export const column = () => {

    return(
        <ButtonGroup direction='column'>
            <Button>BUTTON</Button>
            <Button>BUTTON</Button>
            <Button>BUTTON</Button>
        </ButtonGroup>
    )
}


export const rightAlign = () => {

    return(
        <ButtonGroup css={{ marginTop: '3rem' }} rightAlign>
            <Button theme="tertiary">취소</Button>
            <Button>확인</Button>
        </ButtonGroup>
    )
}
