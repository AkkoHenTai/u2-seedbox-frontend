import { StepItemProps } from "./types";

export default function StepsItem({ disabled = false, direction, index, length, title, subTitle, current, onClick }: StepItemProps) {
    return (
        <div
            className={`flex ${direction === 'horizontal' ? 'flex-col' : ''} ${disabled ? 'opacity-50' : ''} items-center gap-2 relative cursor-pointer`}
            onClick={() => onClick && onClick()}
        >
            <div className={`
                    w-8 h-8 text-xs rounded-full flex justify-center items-center
                     ${current !== undefined && index !== undefined && current >= index ? 'bg-[#1677ff]' : 'bg-[#1677ff]/30'} transition-all  duration-150
                     text-white relative z-20`}>
                {index !== undefined ? index + 1 : ''}
            </div>

            <div className="flex flex-col items-center gap-2 text-xs w-32">
                <span>{title}</span>
                <span>{subTitle}</span>
            </div>
            {length !== undefined && index !== undefined && index + 1 !== length && (
                <div className="w-20 h-1 absolute top-4 left-16 z-10 mx-6">
                    <div className={`${current !== undefined && current > index ? 'bg-[#1677ff]' : 'bg-[#1677ff]/30'} w-full h-full transition-all duration-150`}></div>
                    {/* <div className={`bg-[#1677ff] ${current !== undefined && current > index ? 'w-20' : 'w-0'}  h-full absolute left-0 top-0 transition-all`}></div> */}
                </div>
            )}
        </div>
    );
}
