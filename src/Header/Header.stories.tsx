/** @jsx jsx */
import { jsx } from '@emotion/core'
import Header from './Header'

export default {
    title:'component|header',
    component:Header
}

export const header = () => {
    return(
        <Header></Header>
    )
}