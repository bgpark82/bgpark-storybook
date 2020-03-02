/** @jsx jsx */
import { jsx } from '@emotion/core'
import { action } from '@storybook/addon-actions'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { Item } from '../Header/Header'
import Header from './Header'

export default {
    title:'component|header',
    component:Header,
    decorators:[withKnobs]
}

const profileUrl = "https://images.unsplash.com/photo-1561399889-34ce01fb4b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
const headerList:Item[] = [
    {
        name: 'shadowing',
        text: '쉐도잉'
    },
    {
        name: 'all',
        text: '전체보기'
    },
]


export const header = () => {
    const buttonText = text('buttonText','로그인')
    const hideButton = boolean('hideButton',false);
    const hideProfile = boolean('hideProfile',false);
    const logoText = text('logoText','Lets Shadow')
    const profile = text('profileUrl',profileUrl);

    return(
        <Header
            profileUrl={profile}
            header={headerList}
            buttonText={buttonText}
            hideButton={hideButton}
            hideProfile={hideProfile}
            logoText={logoText}
            onClickButton={action('onClickButton')}
            onClickItem={action('onClickItem')}
            onClickLogo={action('onClickLogo')}
            onClickProfile={action('onClickProfile')}
        ></Header>
    )
}

export const withoutProfile = () => <Header hideProfile header={headerList} profileUrl={profileUrl}/>
export const withoutButton  = () => <Header hideButton header={headerList} profileUrl={profileUrl}/>