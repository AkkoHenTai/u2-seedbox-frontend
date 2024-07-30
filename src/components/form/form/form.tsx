import React, { useState } from "react";
import { FormItemProps, FormProps, FormRules } from "./types";
import Schema from 'async-validator';

interface Errors {
    [key: string]: string;
}

export default function Form({
    children, rules,
    labelAlign, layout,
    onSubmit
}: FormProps) {

    // 存储错误
    const [errors, SetErrors] = useState<Errors>({});
    // 创建校验器
    const validator = new Schema(rules);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // 获取表单数据
        const form = e.currentTarget;
        // 处理表单数据，处理成对象
        const formData = Array.from(form.elements).reduce((acc, element: any) => {
            if (element.name) acc[element.name] = element.value;
            return acc;
        }, {} as Record<string, any>);

        // 验证处理完成的表单数据
        validator.validate(formData).then(() => {
            // 验证通过
            SetErrors({});
            onSubmit && onSubmit(rules);
        }).catch(({ errors, fields }) => {
            // 验证失败
            // 保存错误
            const newErrors: Errors = {};
            errors.forEach((err: any) => {
                newErrors[err.field] = err.message;
            });
            SetErrors(newErrors);
        })
    };



    return (
        <form onSubmit={handleSubmit}>
            {
                React.Children.map(children, (child) => {
                    if (React.isValidElement<FormItemProps>(child) && child.props.name) {
                        // 获取该子元素对应的rule
                        const error = errors[child.props.name];

                        return React.cloneElement(child, {
                            error, labelAlign
                        });
                    }
                })
            }
        </form>
    )
};