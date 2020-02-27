import { action } from '@storybook/addon-actions'
import { text, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import Hello from './Hello'

export default {
    title:'component|hello',
    component:Hello,
    decorators:[withKnobs],
}

export const hello = () => {
    const name = text('name','안녕')
    
    return <Hello onHello={action('onHello')} name={name}></Hello>
}