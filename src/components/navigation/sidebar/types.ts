export interface SidebarItemProps {
    uniqueKey: string;
    name: string;
    link: string;
    icon: JSX.Element;
    color: string;


    childItems?: SidebarItemProps[];
    disabled?: boolean;
    onClick?: (key: string) => void;

    active?: boolean;
    setActive?: (active: string) => void;
    isExpanded?: boolean;
}

export interface SidebarProps {
    items: SidebarItemProps[];
    
    textColor?: string;
    bgColor?: string;
    onChange?: (key: string) => void;
}