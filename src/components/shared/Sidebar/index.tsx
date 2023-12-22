import React from 'react'
import { Layout, Menu } from 'antd'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Link from 'next/link';
import SidebarMenu from './SidebarMenu';
const Sidebar = ({ collapsed, setCollapsed }: { collapsed: boolean, setCollapsed?: any }) => {
    const { Sider } = Layout;
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="text-center p-1">
                <Link href="/" className="!text-[#fff] text-[40px] font-bold">
                    {collapsed ? "L" : "Localbet"}
                </Link>
            </div>
            <SidebarMenu />
        </Sider>
    )
}

export default Sidebar