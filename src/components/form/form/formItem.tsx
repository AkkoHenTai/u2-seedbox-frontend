import React from "react";
import { FormItemProps } from "./types";

export function FormItem({
    label, name, error, children, rule, onChange
}: FormItemProps) {
    return (
        <div className="mb-4 last:mb-0">
            <label>{label}</label>
            {React.cloneElement(children as React.ReactElement, {
                name,
                onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                    onChange && onChange(e.target.value);
                }
            })}
            {error && <span className="text-red-500">{error}</span>}
        </div>
    );
};