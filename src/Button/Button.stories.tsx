/** @jsx jsx */
import { withKnobs } from '@storybook/addon-knobs';
import Button from './Button';
import {jsx, css} from '@emotion/core'

export default {
    title : 'component|button',
    component:Button,
    decorators:[withKnobs]
}

export const hello = () => {

    return(
        <Button>BUTTON</Button>
    )
}

export const themes = () => {
    return(
        <div css={buttonWrapper}>
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
        <div css={buttonWrapper}>
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

const buttonWrapper = css`
    display:flex;
    & > div {
        margin-right:1rem;
    }
`