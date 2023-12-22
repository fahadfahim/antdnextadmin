import { AppstoreOutlined, AreaChartOutlined, BorderRightOutlined, MailOutlined, SettingOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import React from 'react'
import type { MenuProps } from "antd";
import { Menu } from "antd";
import Link from 'next/link';

type MenuItem = Required<MenuProps>["items"][number];
const SidebarMenu = () => {
    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
        type?: "group"
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
            type,
        } as MenuItem;
    }

    const items: MenuItem[] = [
        getItem(
            <Link href="/agent/dashboard">Dashboard</Link>,
            "dashboard",
            <Link href="/agent/dashboard">
                <BorderRightOutlined />
            </Link>
        ),
        getItem(
            <Link href="/agent/blog">Blog</Link>,
            "blog",
            <Link href="/agent/blog">
                <AreaChartOutlined />
            </Link>
        ),
        getItem("Life Style", "sub1", <MailOutlined />, [
            getItem(<Link href="/agent/fashion">Fashion</Link>,
                "fashion",
                <Link href="/agent/fashion">
                    <AreaChartOutlined />
                </Link>),
            getItem(<Link href="/agent/electronics">Electronics</Link>,
                "electronics",
                <Link href="/agent/electronics">
                    <AreaChartOutlined />
                </Link>),
            getItem(<Link href="/agent/dailyneeds">Daily Needs</Link>,
                "blog",
                <Link href="/agent/dailyneeds">
                    <AreaChartOutlined />
                </Link>),
            getItem(<Link href="/agent/cloths">Cloths</Link>,
                "cloths",
                <Link href="/agent/cloths">
                    <AreaChartOutlined />
                </Link>),
        ]),

        getItem("Education", "sub2", <AppstoreOutlined />, [
            getItem(
                <Link href="/agent/ssc">SSC</Link>,
                "ssc",
                <Link href="/agent/ssc">
                    <AreaChartOutlined />
                </Link>
            ),
            getItem(
                <Link href="/agent/hsc">HSC</Link>,
                "hsc",
                <Link href="/agent/hsc">
                    <AreaChartOutlined />
                </Link>
            ),
            getItem("Undre Graduates", "sub3", null, [
                getItem(
                    <Link href="/agent/undergrade/engineering">Engineering</Link>,
                    "engineering",
                    <Link href="/agent/undergrade/engineering">
                        <AreaChartOutlined />
                    </Link>
                ),
                getItem(
                    <Link href="/agent/undergrade/hons">BBA</Link>,
                    "hons",
                    <Link href="/agent/undergrade/hons">
                        <AreaChartOutlined />
                    </Link>
                )
            ]),
        ]),
        getItem("Newsletter", "news", <SettingOutlined />, [
            getItem(
                <Link href="/agent/daily">Daily Newsletter</Link>,
                "dailynews",
                <Link href="/agent/daily">
                    <AreaChartOutlined />
                </Link>
            ),
            getItem(
                <Link href="/agent/weekly">Weekly Newsletter</Link>,
                "weekly",
                <Link href="/agent/weekly">
                    <AreaChartOutlined />
                </Link>
            ),
            getItem(
                <Link href="/agent/monthly">Monthly</Link>,
                "monthly",
                <Link href="/agent/monthly">
                    <AreaChartOutlined />
                </Link>
            ),
            getItem(
                <Link href="/agent/halfyearly">Half Yearly</Link>,
                "half",
                <Link href="/agent/halfyearly">
                    <AreaChartOutlined />
                </Link>
            ),
        ]),
    ];

    return (
        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={items}
        />
    )
}

export default SidebarMenu