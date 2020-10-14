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
                <Col xxl={3} xl={4} lg={5} md={6} sm={6} xs={7}>
                    <Online />
                </Col>
                <Col xxl={21} xl={20} lg={19} md={18} sm={18} xs={17}>
                    <Messages />
                    <MessageControls />
                </Col>
            </Row>
        </>
    )
}

export default ChatPage