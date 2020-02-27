/** @jsx jsx */
import { withKnobs, text, array, select, boolean } from '@storybook/addon-knobs';
import Button from './Button';
import {jsx, css} from '@emotion/core'
import { action } from '@storybook/addon-actions';

export default {
    title : 'component|button',
    component:Button,
    decorators:[withKnobs]
}

export const button = () => {
    const theme = select('theme',['primary','secondary','tertiary'], 'primary');
    const size = select('size',['small','medium','large'], 'medium');
    const disabled = boolean('disabled',false)
    const width = text('width','')
    return(
        <Button theme={theme} size={size} disabled={disabled} onClick={action('onClick')} width={width}>BUTTON</Button>
    )
}

export const themes = () => {
    return(
        <div css={VirticalWrapper}>
            <div>
                <Button theme="primary">PRIMARY</Button>
            </div>
            <div>
                <Button theme="secondary">SECONDARY</Button>
            </div>
            <div>
                <Button theme="tertiary">TERTIARY</Button>
            </div>
        </div>
    )
}

export const sizes = () => {
    return(
        <div css={VirticalWrapper}>
            <div>
                <Button size="small">SMALL</Button>
            </div>
            <div>
                <Button size='medium'>MEDIUM</Button>
            </div>
            <div>
                <Button size='large'>LARGE</Button>
            </div>
        </div>
    )
}

export const disabled = () => {
    return(
        <div css={VirticalWrapper}>
            <div>
                <Button disabled theme="primary">PRIMARY</Button>
            </div> 
            <div> 
                <Button disabled theme="secondary">SECONDARY</Button>
            </div> 
            <div> 
                <Button disabled theme="tertiary">TERTIARY</Button>
            </div>
        </div>
    )
}

export const width = () => {
    return(
        <div css={HorizontalWrapper}>
            <div>
                <Button width="20rem">CUSTOM WIDTH</Button>
            </div> 
            <div> 
                <Button width="100%">FULL WIDTH</Button>
            </div> 
        </div>
    )
}



const VirticalWrapper = css`
    display:flex;
    & > div {
        margin-right:1rem;
    }
`

const HorizontalWrapper = css`
    & > div {
        margin-bottom:1rem
    }
`