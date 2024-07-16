import { StepsProps } from "./types";
import StepsItem from "./stepsItem";

export default function Steps({ direction = 'horizontal', current = 0, items, onChange }: StepsProps) {

    // 步骤条改变事件
    const handleChange = (current: number) => {
        onChange?.(current);
    };

    return (
        <div className={`flex ${direction === 'vertical' ? 'flex-col' : ''} relative`}>
            {items.map((item, index) => (
                <StepsItem
                    direction={direction}
                    key={index}
                    index={index}
                    length={items.length}
                    current={current}
                    {...item}
                    onClick={() => handleChange(index)}
                />
            ))}
        </div>
    );
}
