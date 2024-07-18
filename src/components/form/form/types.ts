import { RuleItem } from 'async-validator';

export interface FormProps<T = Record<string, any>> {
    children: React.ReactNode;
    rules: FormRules<T>;

    labelAlign?: 'left' | 'right'; // label文本对齐方式
    layout?: 'horizontal' | 'vertical'; // 表单布局方式

    onSubmit?: (values: T) => void;
}

// 表单校验规则
export type FormRules<T> = { [K in keyof T]: FormItemRule[] };

// 表单项验证
export interface FormItemRule extends RuleItem {
    trigger?: string; // 触发方式
}


export interface FormItemProps{
    label: string; // 表单项标签
    name: string; // 表单项名称
    message: string; // 表单项错误提示信息

    children: React.ReactNode;

    labelAlign?: 'left' | 'right'; // label文本对齐方式

    rule?: FormItemRule[]; // 表单项验证规则
    onChange?: (value: any) => void;
}