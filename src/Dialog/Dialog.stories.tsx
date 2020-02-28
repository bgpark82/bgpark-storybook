/** @jsx jsx */
import { jsx } from '@emotion/core'
import { action } from '@storybook/addon-actions'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import Dialog from './Dialog'

export default {
    title:'component|dialog',
    component:Dialog,
    parameters:{
        docs:{
            inlineStories:false
        }
    },
    decorators:[withKnobs]
}

export const dialog = () => {
    const visible = boolean('visible', false);
    const title = text('title','포스트 삭제');
    const description = text('description','포스트를 정말 삭제하시겠습니까')
    const cancelable = boolean('cancelable',true)
    const hideButton = boolean('hideButton',false)
    const cancelText = text('cancelText','취소');
    const confirmText = text('confirmText','확인')

    return(
        <Dialog onConfirm={action('onConfirm')} onCancel={action('onCancel')} cancelText={cancelText} confirmText={confirmText} hideButton={hideButton} visible={visible} title={title} description={description} cancelable={cancelable}></Dialog>
    )
}