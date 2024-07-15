import { StepItemProps } from "./types";

export default function StepsItem({ disabled = false, direction, index, length, title, subTitle }: StepItemProps) {
    return (
        <div className={`flex ${direction === 'horizontal' ? 'flex-col' : ''} ${disabled ? 'opacity-50' : ''} items-center gap-2 relative`}>
            <div className="w-8 h-8 text-xs rounded-full flex justify-center items-center bg-[#1677ff] text-white relative z-20">
                {index !== undefined ? index + 1 : ''}
            </div>
            <div className="flex flex-col items-center gap-2 text-xs w-32">
                <span>{title}</span>
                <span>{subTitle}</span>
            </div>
            {length !== undefined && index !== undefined && index + 1 !== length && (
                <div className="w-32 h-1 absolute top-4 left-16 z-10 px-5 box-border">
                    <div className="bg-[#1677ff] w-full h-full"></div>
                </div>
            )}
        </div>
    );
}
