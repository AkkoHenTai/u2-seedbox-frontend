import { FormItemProps } from "./types";

export function FormItem({
    label, name, message, children, rule, onChange
}: FormItemProps) {

    return (
        <div className="">
            <label>{label}</label>
            {children}
            {message && <span className="">{message}</span>}
        </div>
    );
};