import { SidebarItemProps, SidebarProps } from "./types";
import SidebarItem from "./sidebarItem";
import { useEffect, useState } from "react";

export default function Sidebar({ items: initialItems, textColor, bgColor }: SidebarProps) {
    const [items, setItems] = useState(initialItems);

    // 模拟初始化生命周期钩子，初始化时第一个元素默认被选中
    const init = () => {
        useEffect(() => {
            setItems(items.map((item, index) => ({ ...item, active: index === 0 })));
        }, []);

        return () => { };
    };
    init();


    // 更新被点击的菜单及其子菜单的active状态
    const handleSetActive = (indexPath: string) => {
        const updatedItems = updateActiveStatus(items, indexPath);
        setItems(updatedItems);
    };

    return (
        <div className="w-full h-full pl-5 flex flex-col gap-5 select-none text-nowrap text-ellipsis" style={{ color: textColor, backgroundColor: bgColor }}>
            {items.map((item) => (
                <SidebarItem
                    key={item.index}
                    {...item}
                    setActive={(indexPath) => handleSetActive(indexPath)}
                />
            ))}
        </div>
    );
}

// 递归更新菜单状态
const updateActiveStatus = (items: SidebarItemProps[], targetIndex: string): SidebarItemProps[] => {
    // 用于判断该菜单及其子菜单是否是被点击的元素
    let found = false;

    // 更新被点击的菜单及其子菜单的active状态
    const updatedItems = items.map(item => {
        let isActive = false;
        if (item.index === targetIndex) {
            // 如果是被点击的菜单，将其设置为active状态，并标记该菜单为被点击的元素
            isActive = true;
            found = true;

            if (item.childItems) {
                item.childItems = updateActiveChildItem(item.childItems);
            }
        } else if (item.childItems) {
            // 如果不是被点击的菜单，但是有子菜单，递归查找该菜单的子菜单是否有被点击的元素
            const updatedChildItems = updateActiveStatus(item.childItems, targetIndex);
            // 如果子菜单中有被点击的元素，将该菜单设置为active状态
            if (updatedChildItems.some(child => child.active)) {
                isActive = true;
                found = true;
            }
            item.childItems = updatedChildItems;
        }
        return {
            ...item,
            active: isActive,
        };
    });

    // 如果找到了被点击的元素，返回更新后的items
    if (found) {
        return updatedItems;
    } else {
        // 如果没有找到，即代表该菜单及其子菜单都没有被点击的元素，则将该菜单及其子菜单的active状态设置为false
        return items.map(item => {
            return {
                ...item,
                active: false,
            };
        })
    }
};

// 递归更新被点击元素的childItems中第一个元素的状态
const updateActiveChildItem = (items: SidebarItemProps[]): SidebarItemProps[] => {
    // 只需要关心更改第一个子元素的状态
    // 第一个子元素有孩子，就选中该子元素，然后递归他的第一个子元素的子元素
    // 第一个子元素没有孩子，就选中该子元素
    items = items.map((item, index) => {
        if (index === 0) {
            if (item.childItems) {
                item.childItems = updateActiveChildItem(item.childItems);
            }
            item.active = true;
        }
        return item;
    });

    return items;
};