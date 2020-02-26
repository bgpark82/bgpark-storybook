import React from 'react'
import Hello from './Hello'
import {withKnobs, text} from '@storybook/addon-knobs'
import {action} from '@storybook/addon-actions'

export default {
    title:'component|hello',
    component:Hello,
    decorators:[withKnobs],
    parameters:{
        
    },
}

export const hello = () => {
    const name = text('name','안녕')
    
    return <Hello onHello={action('onHello')} name={name}></Hello>
}