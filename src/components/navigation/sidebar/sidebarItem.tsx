import { useEffect, useState } from "react";
import { SidebarItemProps } from "./types";

export default function SidebarItem(props: SidebarItemProps) {
    const [isExpanded, setIsExpanded] = useState(props.isExpanded !== undefined ? props.isExpanded : false);

    useEffect(() => {
        if (props.active) {
            setIsExpanded(true);
        }
    }, [props.active]);

    const handleClick = () => {
        if (props.onClick) props.onClick();
        if (props.setActive) props.setActive(props.index);
        if (props.childItems) setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <div
                onClick={handleClick}
                className="flex justify-between p-2 rounded-lg hover:bg-[#f0f0f4]"
                style={{ cursor: props.disabled ? 'not-allowed' : 'pointer', backgroundColor: props.active ? '#f0f0f4' : '', opacity: props.disabled ? 0.5 : 1 }}
            >
                <div className="flex items-center gap-3">
                    <div className="size-8 bg-[#bacac6] p-1 rounded-lg" style={{ backgroundColor: props.active ? props.color : '' }}>
                        <i style={{ color: props.active ? 'white' : '#88ada6' }}>{props.icon}</i>
                    </div>
                    <span className="text-sm">{props.name}</span>
                </div>
                {props.childItems && (
                    <i className="flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className={`w-5 h-5 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 8.25l7.5 7.5 7.5-7.5" />
                        </svg>
                    </i>
                )}
            </div>
            {props.childItems && isExpanded && props.childItems.map((item) => (
                <div key={item.index} className="ml-5 mt-2">
                    <SidebarItem {...item} setActive={props.setActive} />
                </div>
            ))}
        </div>
    );
}
