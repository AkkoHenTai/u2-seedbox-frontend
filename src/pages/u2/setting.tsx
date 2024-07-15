import Steps from "@/components/navigation/steps/steps"
import { StepItemProps, StepsProps } from "@/components/navigation/steps/types"

export default function Setting() {
    const stepOptions: StepsProps = {
        items: [
            { title: '步骤一', subTitle: '这是一段描述', status: 'finish' },
            { title: '步骤二', subTitle: '这是一段描述', status: 'finish' },
            { title: '步骤二', subTitle: '这是一段描述', status: 'finish' }
        ],
        direction: 'horizontal',
        current: 1,
    };

    return (
        <div className="">
            <Steps items={stepOptions.items} direction={stepOptions.direction} current={stepOptions.current} />
        </div>
    )
}