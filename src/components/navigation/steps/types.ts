export interface StepsProps {
    items: StepItemProps[];
    direction: 'horizontal' | 'vertical'; // 步骤条方向, 水平（horizontal）和竖直（vertical）
    current: number; // 当前步骤


    onChange?: (current: number) => void; // 步骤改变事件
};

export interface StepItemProps {
    title: string; // 标题
    subTitle: string; // 子标题
    status: 'wait' | 'process' | 'finish' | 'error'; // 状态


    index?: number; // 步骤序号
    length?: number; // 步骤总数
    direction?: 'horizontal' | 'vertical'; // 步骤条方向, 水平（horizontal）和竖直（vertical）
    disabled?: boolean; // 是否禁用
    // description?: string; // 描述(可选)
    icon?: JSX.Element; // 图标(可选)
}