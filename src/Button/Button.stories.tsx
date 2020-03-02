/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Icon from '../Icon/Icon';
import Button from './Button';

export default {
    title : 'component|button',
    component:Button,
    decorators:[withKnobs]
}

export const button = () => {
    const theme = select('theme',['primary','secondary','tertiary','bordered'], 'primary');
    const size = select('size',['small','medium','large'], 'medium');
    const disabled = boolean('disabled',false)
    const width = text('width','')
    const radius = boolean('radius',false)
    return(
        <Button radius={radius} theme={theme} size={size} disabled={disabled} onClick={action('onClick')} width={width}>BUTTON</Button>
    )
}

export const themes = () => {
    return(
        <div css={VerticalWrapper}>
            <div>
                <Button theme="primary">PRIMARY</Button>
            </div>
            <div>
                <Button theme="secondary">SECONDARY</Button>
            </div>
            <div>
                <Button theme="tertiary">TERTIARY</Button>
            </div>
            <div>
                <Button theme="bordered">BORDERED</Button>
            </div>
        </div>
    )
}

export const sizes = () => {
    return(
        <div css={VerticalWrapper}>
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
        <div css={VerticalWrapper}>
            <div>
                <Button disabled theme="primary">PRIMARY</Button>
            </div> 
            <div> 
                <Button disabled theme="secondary">SECONDARY</Button>
            </div> 
            <div> 
                <Button disabled theme="tertiary">TERTIARY</Button>
            </div>
            <div>
                <Button disabled theme="bordered">BORDERED</Button>
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

export const withIcon = () => {
    return(
        <div>
            <ButtonGroup>
                <Button size="medium">
                    <Icon icon="heart"/> HEART
                </Button>
                <Button size="medium" theme="secondary">
                    <Icon icon="exit"/> EXIT
                </Button>            
                <Button size="medium" theme="tertiary">
                    <Icon icon="pencil"/> PENCIL
                </Button>
            </ButtonGroup>
            
        </div>
    )
}

export const withIconDisabled = () => {
    return(
        <div>
            <ButtonGroup>
                <Button disabled size="medium">
                    <Icon icon="heart"/> HEART
                </Button>
                <Button disabled size="medium" theme="secondary">
                    <Icon icon="exit"/> EXIT
                </Button>            
                <Button disabled size="medium" theme="tertiary">
                    <Icon icon="pencil"/> PENCIL
                </Button>
            </ButtonGroup>
        </div>
    )
}

export const withIconInDifferentSize = () => {
    return(
        <div>
            <ButtonGroup>
                <Button size="small">
                    <Icon icon="heart"/> HEART
                </Button>
                <Button size="medium">
                    <Icon icon="heart"/> HEART
                </Button>            
                <Button size="large">
                    <Icon icon="heart"/> HEART
                </Button>
            </ButtonGroup>
        </div>
    )
}

export const iconOnlyInDifferentSize = () => {
    return(
        <div>
            <ButtonGroup>
                <Button iconOnly size="small">
                    <Icon icon="heart"/> 
                </Button>
                <Button iconOnly size="medium">
                    <Icon icon="heart"/> 
                </Button>            
                <Button iconOnly size="large">
                    <Icon icon="heart"/> 
                </Button>
            </ButtonGroup>
        </div>
    )
}




const VerticalWrapper = css`
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