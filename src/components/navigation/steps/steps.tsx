import { StepsProps } from "./types";
import StepsItem from "./stepsItem";

export default function Steps({ direction = 'horizontal', current = 0, items, ...props }: StepsProps) {
    return (
        <div className={`flex ${direction === 'vertical' ? 'flex-col' : ''} relative overflow-hidden`}>
            {items.map((item, index) => (
                <StepsItem
                    direction={direction}
                    key={index}
                    index={index}
                    length={items.length}
                    {...item}
                />
            ))}
        </div>
    );
}
