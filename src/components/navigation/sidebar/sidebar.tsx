import { SidebarItemProps, SidebarProps } from "./types";
import SidebarItem from "./sidebarItem";
import { useState } from "react";

export default function Sidebar(props: SidebarProps) {
    const [items, setItems] = useState(props.items.map((item, index) => ({
        ...item,
        active: index === 0,
    })));

    // 激活被点击的子菜单
    const handleSetActive = (index: number) => {
        setItems(items.map((item, i) => ({
            ...item,
            active: i === index,
        })));
    };

    return (
        <div className="w-full h-full pl-5 flex flex-col gap-5 select-none text-nowrap text-ellipsis">
            {items.map((item, index) => (
                <SidebarItem
                    key={item.index}
                    {...item}
                    setActive={() => handleSetActive(index)}
                />
            ))}
        </div>
    )
}
