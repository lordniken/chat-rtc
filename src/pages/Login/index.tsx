import React, {useState} from 'react'
import { Layout, Typography, Input, Button, Form } from 'antd';
import { UserOutlined, LoginOutlined } from '@ant-design/icons'; 

const LoginPage:React.FC = () => {
    const [isLoading, setIsLoading] = useState(false)

    const layoutStyles = {
        height: "100vh",
        paddingTop: 20,
        display: "flex",
        justifyContent: "center",
        flexDirection: "row" as 'row'
    }

    return ( 
        <Layout style={layoutStyles}>
            <div>
                <Typography.Title level={3}>Please type your name</Typography.Title>
                <Form
                    name="basic"
                    initialValues={{ username: '' }}
                    onFinish={() => setIsLoading(true)}
                    layout={"inline"}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                        style={{marginBottom: 10}}
                    >
                        <Input placeholder="Your name" prefix={<UserOutlined />} style={{ width: 200 }} autoFocus />
                    </Form.Item>
                    <Form.Item style={{marginRight: 0}}>
                        <Button type="primary" htmlType="submit" loading={isLoading} icon={<LoginOutlined />}>Login</Button>
                    </Form.Item>
                </Form>
            </div>
        </Layout>
    )
}

export default LoginPage