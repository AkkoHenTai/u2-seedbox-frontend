import Sidebar from "@/components/navigation/sidebar/sidebar";
import Home from "@/assets/icons/home.svg?react";
import { SidebarItemProps } from "@/components/navigation/sidebar/types";

export default function Body() {
    const sidebars = [
        {
            index: '0',
            name: 'Home1',
            link: '/home',
            icon: <Home />,
            color: '#FF0000'
        },
        {
            index: '1',
            name: 'Home2',
            link: '/home',
            icon: <Home />,
            color: '#70f3ff',
            childItems: [
                {
                    index: '1-1',
                    name: 'Home1-1',
                    link: '/home2',
                    icon: <Home />,
                    color: '#FF0000',
                    childItems: [
                        {
                            index: '1-1-1',
                            name: 'Home1-1-1',
                            link: '/home2',
                            icon: <Home />,
                            color: '#FF0000'
                        },
                        {
                            index: '1-1-2',
                            name: 'Home1-1-2',
                            link: '/home2',
                            icon: <Home />,
                            color: '#FF0000'
                        }
                    ]
                }
            ],
            onClick: () => {
                console.log('click');
            }
        },
        {
            index: '2',
            name: 'Home3',
            link: '/home',
            icon: <Home />,
            color: '#0eb83a'
        }
    ];

    return (
        <div className='w-screen h-screen flex flex-row mt-[200px]'>
            <div className="w-52 ">
                <Sidebar items={sidebars} />
            </div>

            <div className='w-full h-full'>
            </div>
        </div>
    );
}
