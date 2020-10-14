import React from 'react'
import { Message } from './Message'

export const Messages: React.FC = () => {
    return (
        <div style={{height: 'calc(100vh - 140px)', overflowY: 'auto', padding: '0 10px'}}>
            <Message />
        </div>
    )
}