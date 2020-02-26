import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import Button from './Button';

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