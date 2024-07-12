import Sidebar from "@/components/navigation/sidebar/sidebar";
import Home from "@/assets/icons/home.svg?react";
import { SidebarItemProps } from "@/components/navigation/sidebar/types";
import { Outlet } from "react-router-dom";

export default function Body() {
    const sidebars = [
        {
            index: '1',
            name: '下载器',
            link: '',
            icon: <Home />,
            color: '#FF0000',
            childItems: [
                {
                    index: '1-1',
                    name: '下载器配置',
                    link: '',
                    icon: <Home />,
                    color: '#FF0000',
                }
            ]
        },
        {
            index: '2',
            name: 'U2',
            link: '',
            icon: <Home />,
            color: '#FF0000',
            childItems: [
                {
                    index: '2-1',
                    name: 'U2配置',
                    link: '/U2/setting',
                    icon: <Home />,
                    color: '#FF0000',
                },
                {
                    index: '2-2',
                    name: '刷流',
                    link: '',
                    icon: <Home />,
                    color: '#FF0000',
                },
                {
                    index: '2-3',
                    name: '日志',
                    link: '',
                    icon: <Home />,
                    color: '#FF0000',
                }
            ]
        },
        {
            index: '3',
            name: '个人中心',
            link: '',
            icon: <Home />,
            color: '#FF0000'
        }
    ];


    return (
        <div className='w-screen h-screen flex flex-row'>
            <div className="w-52 h-full border-r-[1px] border-black/10 shrink-0 flex flex-col pl-5 pr-2">
                <div className="w-full h-20 flex justify-center items-center">Logo</div>

                <Sidebar items={sidebars} />
            </div>

            <div className='w-full h-full p-5'>
                <Outlet />
            </div>
        </div>
    );
}
