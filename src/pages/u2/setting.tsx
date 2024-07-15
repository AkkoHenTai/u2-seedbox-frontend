import Steps from "@/components/navigation/steps/steps"
import { StepItemProps } from "@/components/navigation/steps/types"
import { useState } from "react";

export default function Setting() {
    const stepItems: StepItemProps[] = [
        { title: '步骤一', subTitle: '这是一段描述', status: 'finish' },
        { title: '步骤二', subTitle: '这是一段描述', status: 'finish' },
        { title: '步骤二', subTitle: '这是一段描述', status: 'finish' }
    ];

    const [current, setCurrent] = useState(0);

    // 切换事件
    const handleChange = (current: number) => {
        setCurrent(current);
    };

    return (
        <div className="">
            <Steps items={stepItems} direction="horizontal" current={current} onChange={handleChange} />
        </div>
    )
}