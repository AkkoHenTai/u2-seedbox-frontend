import React from "react";
import { FormItemProps } from "./types";

export function FormItem({
    label, name, error, children, rule, onChange
}: FormItemProps) {
    return (
        <div className="mb-4 last:mb-0 relative">
            <label className={`mb-2 flex ${rule?.find(item => item.required)?.required ? 'before:content-["*"] before:text-red-500' : ''}`}>
                {label}
            </label>
            {React.cloneElement(children as React.ReactElement, {
                name,
                onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                    onChange && onChange(e.target.value);
                }
            })}
            {error && <span className="text-red-500 text-xs absolute -bottom-5">{error}</span>}
        </div>
    );
};