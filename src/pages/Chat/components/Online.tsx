import { MinusCircleOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import React from 'react'

export const Online: React.FC = () => {
    return (
        <>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                selectedKeys={[]}
                style={{height: 'calc(100vh - 80px)'}}
            >
                <Menu.Item key="2" icon={<MinusCircleOutlined />} title="Away">
                    madfy
                </Menu.Item>
                <Menu.Item key="3">
                    meow
                </Menu.Item>
            </Menu>
        </>
    )
}