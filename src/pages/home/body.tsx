import Sidebar from "@/components/navigation/sidebar/sidebar";
import Home from "@/assets/icons/home.svg?react";
import { SidebarItemProps } from "@/components/navigation/sidebar/types";

export default function Body() {
    const sidebars = [
        {
            index: '1',
            name: 'Home1',
            link: '/home1',
            icon: <Home />,
            color: '#FF0000'
        },
        {
            index: '2',
            name: 'Home2',
            link: '/home2',
            icon: <Home />,
            color: '#70f3ff',
            childItems: [
                {
                    index: '2-1',
                    name: 'Home2-1',
                    link: '/home2-1',
                    icon: <Home />,
                    color: '#FF0000',
                    childItems: [
                        {
                            index: '2-1-1',
                            name: 'Home2-1-1',
                            link: '/home2-1-1',
                            icon: <Home />,
                            color: '#FF0000'
                        },
                        {
                            index: '2-1-2',
                            name: 'Home2-1-2',
                            link: '/home2-1-2',
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
            index: '3',
            name: 'Home3',
            link: '/home3',
            icon: <Home />,
            color: '#0eb83a',
            childItems: [
                {
                    index: '3-1',
                    name: 'Home3-1',
                    link: '/home3-1',
                    icon: <Home />,
                    color: '#FF0000',
                    childItems: [
                        {
                            index: '3-1-1',
                            name: 'Home3-1-1',
                            link: '/home3-1-1',
                            icon: <Home />,
                            color: '#FF0000'
                        },
                        {
                            index: '3-1-2',
                            name: 'Home3-1-2',
                            link: '/home3-1-2',
                            icon: <Home />,
                            color: '#FF0000'
                        }
                    ]
                },
                {
                    index: '3-2',
                    name: 'Home3-2',
                    link: '/home3-2',
                    icon: <Home />,
                    color: '#FF0000',
                    childItems: [
                        {
                            index: '3-2-1',
                            name: 'Home3-2-1',
                            link: '/home3-2-1',
                            icon: <Home />,
                            color: '#FF0000'
                        },
                        {
                            index: '3-2-2',
                            name: 'Home3-2-2',
                            link: '/home3-2-2',
                            icon: <Home />,
                            color: '#FF0000'
                        }
                    ]
                }
            ],
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
