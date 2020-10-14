import React from 'react';
import { Col, Row } from 'antd';
import { Header } from './components/Header';
import { Online } from './components/Online';
import { Messages } from './components/Messages';
import { MessageControls } from './components/MessageControls';

const ChatPage: React.FC = () => {
    return (
        <>
            <Header />
            <Row>
                <Col span={3}>
                    <Online />
                </Col>
                <Col span={21}>
                    <Messages />

                    <MessageControls />
                </Col>
            </Row>
        </>
    )
}

export default ChatPage