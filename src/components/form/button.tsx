interface ButtonProps {
    type: 'primary' | 'success' | 'danger' | 'warning' | 'info';
    children: React.ReactNode;
    disabled?: boolean;
    loading?: boolean;
    nativeType?: 'button' | 'submit' | 'reset';
    onClick: () => void;
}

// 按钮样式
const styles = {
    primary: 'w-full h-10 bg-indigo-500 text-white rounded-sm hover:bg-indigo-600 active:bg-indigo-700 shadow-md hover:shadow-lg active:shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 border border-transparent hover:border-indigo-400',
    success: 'w-full h-10 bg-green-500 text-white rounded-sm hover:bg-green-600 active:bg-green-700 shadow-md hover:shadow-lg active:shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 border border-transparent hover:border-green-400',
    danger: 'w-full h-10 bg-red-500 text-white rounded-sm hover:bg-red-600 active:bg-red-700 shadow-md hover:shadow-lg active:shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 border border-transparent hover:border-red-400',
    warning: 'w-full h-10 bg-yellow-500 text-white rounded-sm hover:bg-yellow-600 active:bg-yellow-700 shadow-md hover:shadow-lg active:shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 border border-transparent hover:border-yellow-400',
    info: 'w-full h-10 bg-blue-500 text-white rounded-sm hover:bg-blue-600 active:bg-blue-700 shadow-md hover:shadow-lg active:shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 border border-transparent hover:border-blue-400',
}
// 按钮禁用样式
const disabledStyles = 'bg-gray-300 text-gray-500 cursor-not-allowed hover:bg-gray-300 active:bg-gray-300 shadow-md hover:shadow-lg active:shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 border border-transparent hover:border-gray-300';

export default function Button(props: ButtonProps) {
    return (
        <button
            type={props.nativeType ? props.nativeType : 'button'}
            className={`${styles[props.type]} ${props.disabled ? disabledStyles : ''}`}
            disabled={props.disabled}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}