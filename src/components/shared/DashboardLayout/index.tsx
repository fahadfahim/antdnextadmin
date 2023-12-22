'use client'
import { Button, Layout, Menu, theme } from 'antd'
import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import DashboardHeader from '../DashboardHeader';

const DashboardLayout = ({ children }: { children: any }) => {
  const { Header, Sider, Content } = Layout;

  const [collapsed, setCollapsed] = useState(false)

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const handleCollapsed = () => {
    setCollapsed(!collapsed)
  }
  return (
    <Layout className=' h-screen'>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <DashboardHeader collapsed={collapsed} handleCollapsed={handleCollapsed} />

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default DashboardLayout