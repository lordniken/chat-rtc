import React, {useState} from 'react'
import { CheckCircleOutlined, ClockCircleOutlined, LogoutOutlined, SettingOutlined, StopOutlined } from '@ant-design/icons'
import { Avatar, Button, Dropdown, Menu, PageHeader, Tag } from 'antd'

export const Header: React.FC = () => {
    const [statusMenuIsOpen, setStatusMenuIsOpen] = useState(false);

    const menu = (
        <Menu >
          <Menu.Item key="1" icon={<CheckCircleOutlined />} disabled>Online</Menu.Item>
          <Menu.Item key="2" icon={<ClockCircleOutlined />}>Away</Menu.Item>
          <Menu.Item key="3" icon={<StopOutlined />}>DND</Menu.Item>
        </Menu>
      );

    return (            
        <PageHeader
            ghost={true}
            title="lordniken"
            style={{background: 'linear-gradient(180deg, #eee, #fff)'}}
            avatar={{icon: <Avatar style={{fontSize: 20, top: -5}} size={"large"}>l</Avatar>, size: "large"}}
            tags={<Dropdown
                overlay={menu}
                
              >
                <Tag color="green" onClick={() => setStatusMenuIsOpen(!statusMenuIsOpen)}>online</Tag>
              </Dropdown>}
            extra={[
                <Button key="1" type="primary" shape="circle" icon={<SettingOutlined />} title="Settings" />,
                <Button key="2"  shape="circle" icon={<LogoutOutlined />} title="Logout" />
            ]}
        />                
    )
}

/*
<a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                  Hover me <DownOutlined />
                </a>
*/