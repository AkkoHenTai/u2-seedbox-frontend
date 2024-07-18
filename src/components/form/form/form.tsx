import React from "react";
import { FormItemProps, FormProps, FormRules } from "./types";

export default function Form({
    children, rules,
    labelAlign, layout,
    onSubmit
}: FormProps){

    return (
        <form>
            {
                React.Children.map(children, (child) => {
                    if(React.isValidElement<FormItemProps>(child)){
                        // 获取该子元素对应的rule
                        const rule = rules[child.props.name];

                        return React.cloneElement(child, {
                            rule, labelAlign
                        });
                    }
                })
            }
        </form>
    )
};