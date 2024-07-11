import { SidebarItemProps, SidebarProps } from "./types";
import SidebarItem from "./sidebarItem.tsx";
import { useState } from "react";

export default function Sidebar({ items: initialItems, textColor, bgColor }: SidebarProps) {
    const [items, setItems] = useState(initialItems.map((item, index) => ({
        ...item,
        active: index === 0,
    })));

    const handleSetActive = (index: number) => {
        setItems(items.map((item, i) => ({
            ...item,
            active: i === index,
        })));
    };

    return (
        <div className="w-full h-full pl-5 flex flex-col gap-5 select-none text-nowrap text-ellipsis" style={{ color: textColor, backgroundColor: bgColor }}>
            {items.map((item, index) => (
                <SidebarItem
                    key={item.index}
                    {...item}
                    setActive={() => handleSetActive(index)}
                />
            ))}
        </div>
    );
}
