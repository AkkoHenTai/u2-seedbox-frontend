import Sidebar from "@/components/navigation/sidebar/sidebar";
import Home from "@/assets/icons/home.svg?react";
import { SidebarItemProps } from "@/components/navigation/sidebar/types";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function Body() {
    const sidebars = [
        {
            uniqueKey: '1',
            name: '下载器',
            link: '',
            icon: <Home />,
            color: '#FF0000',
            childItems: [
                {
                    uniqueKey: '1-1',
                    name: '下载器配置',
                    link: '',
                    icon: <Home />,
                    color: '#FF0000',
                }
            ]
        },
        {
            uniqueKey: '2',
            name: 'U2',
            link: '',
            icon: <Home />,
            color: '#FF0000',
            childItems: [
                {
                    uniqueKey: '2-1',
                    name: 'U2配置',
                    link: '/U2/setting',
                    icon: <Home />,
                    color: '#FF0000',
                },
                {
                    uniqueKey: '2-2',
                    name: '订阅',
                    link: '/U2/subscribe',
                    icon: <Home />,
                    color: '#FF0000',
                },
                {
                    uniqueKey: '2-3',
                    name: '日志',
                    link: '',
                    icon: <Home />,
                    color: '#FF0000',
                }
            ]
        },
        {
            uniqueKey: '3',
            name: '个人中心',
            link: '',
            icon: <Home />,
            color: '#FF0000'
        }
    ];


    // 标题
    const [title, setTitle] = useState('');
    const handleSidebarOnChange = (uniqueKey: string) => {
        // 获取标题
        sidebars.forEach((item) => {
            if (item.uniqueKey === uniqueKey) {
                setTitle(item.name);
            } else if (item.childItems) {
                item.childItems.forEach((child) => {
                    if (child.uniqueKey === uniqueKey) {
                        setTitle(child.name);
                    }
                })
            }
        });
    };

    return (
        <div className='w-screen h-screen flex flex-row'>
            <div className="w-52 h-full border-r-[1px] border-black/10 shrink-0 flex flex-col pl-5 pr-2">
                <div className="w-full h-20 flex justify-center items-center">Logo</div>

                <Sidebar items={sidebars} onChange={handleSidebarOnChange} />
            </div>

            <div className='w-full h-full p-5'>
                <div className="text-2xl font-bold">{title}</div>
                <Outlet />
            </div>
        </div>
    );
}
