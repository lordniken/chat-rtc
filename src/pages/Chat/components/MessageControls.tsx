import { SendOutlined, SmileOutlined } from '@ant-design/icons'
import { Button, Col, Form, Input, Row } from 'antd'
import React from 'react'

export const MessageControls: React.FC = () => {
    return (
        <div style={{position: 'absolute', bottom: 0, width: '100%', padding: '10px'}}>
            <Form
                name="basic"
                initialValues={{ message: '' }}
                onFinish={() => console.log("Sended!")}
                layout={"inline"}
            >
                <Row justify="space-between" style={{width: "100%"}}>
                    <Col xxl={21} xl={20} lg={19} md={18}>
                        <Form.Item name="message">
                            <Input placeholder="Message" autoFocus size="large" />
                        </Form.Item>
                    </Col>
                    <Col style={{display: "flex", alignItems: "center"}}>
                        <Form.Item>
                            <Button icon={<SmileOutlined />} shape="circle" />  
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" icon={<SendOutlined />}>Send</Button>
                        </Form.Item>
                    </Col>
                </Row> 
            </Form>
        </div>
    )
}