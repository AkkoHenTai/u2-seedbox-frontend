import { useState } from "react";
import LoginInput from "@/components/form/login-input";

export default function Login() {
    const [formValue, setFormValue] = useState({
        username: '',
        password: ''
    });

    // 登录事件
    const handleSubmit = () => {
        console.log(formValue);
    };

    // 输入事件
    const handleChange = (fieldName: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValue({ ...formValue, [fieldName]: e.target.value });
    };

    return (
        <div className="w-screen h-screen bg-gradient-to-r from-[#f9c2ec] to-[#abc2ee] flex justify-center items-center">
            <div className="w-4/12 h-4/5 bg-white rounded-3xl px-20">
                <h1 className="text-6xl font-bold my-32 text-center">Login</h1>

                <div className="w-full py-4 flex flex-col gap-10">
                    <LoginInput type="text" label="Username" value={formValue.username} onChange={handleChange('username')}/>

                    <LoginInput type="password" label="Password" value={formValue.password} onChange={handleChange('password')}/>

                    <button className="btn-primary" onClick={handleSubmit}>Log in</button>
                </div>

                <p className="text-center text-gray-500">Don&apos;t have an account yet? <a href="/register" className="text-indigo-500">Register</a></p>
            </div>
        </div>
    )
}