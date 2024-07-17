import React, { useState, useEffect } from 'react';

interface InputProps {
    type: string; // 输入框类型，如password、textarea等
    value: string; // 输入框的值

    placeholder?: string; // 输入框的占位文本
    clearable?: boolean; // 是否显示清除按钮
    disabled?: boolean; // 是否禁用
    prefixIcon?: JSX.Element; // 前置图标
    suffixIcon?: JSX.Element; // 后置图标
    iconColor?: string; // 图标颜色
    maxLength?: number; // 最大长度
    minLength?: number; // 最小长度 

    onBlur?: () => void; // 失去焦点事件
    onFocus?: () => void; // 获得焦点事件
    onChange?: (value: string) => void;
    onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClear?: () => void;
}

const Input: React.FC<InputProps> = ({
    type = 'input', value: propValue, placeholder, clearable = false, disabled = false, prefixIcon, suffixIcon, maxLength, minLength, iconColor = '#1677ff',
    onBlur, onFocus, onChange, onInput, onClear
}) => {
    const [value, setValue] = useState(propValue);

    useEffect(() => {
        setValue(propValue);
    }, [propValue]);

    // 清空事件
    const handleClear = () => {
        setValue('');
        if (onClear) {
            onClear();
        }
        if (onChange) {
            onChange('');
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        if (onChange) {
            onChange(e.target.value);
        }
    }

    return (
        <div className="py-1 px-4 border-2 border-[#1677ff] rounded relative flex items-center">
            {prefixIcon && (
                <span className="mr-2 inline-flex items-center justify-center" style={{ width: '24px', height: '24px', color: iconColor }}>
                    {prefixIcon}
                </span>
            )}
            <div className="flex items-center w-full">
                <input
                    type={type} placeholder={placeholder} disabled={disabled} maxLength={maxLength} minLength={minLength} value={value}
                    onChange={handleChange} onInput={onInput} onBlur={onBlur} onFocus={onFocus}
                    className="bg-inherit flex-grow outline-none px-2 py-1"
                />
                {clearable && value && (
                    <span onClick={handleClear} className="text-2xl ml-2 text-gray-400 hover:text-gray-600 cursor-pointer">×</span>
                )}
            </div>
            {suffixIcon && (
                <span className="ml-2 inline-flex items-center justify-center" style={{ width: '24px', height: '24px', color: iconColor }}>
                    {suffixIcon}
                </span>
            )}
        </div>
    );
}

export default Input;
