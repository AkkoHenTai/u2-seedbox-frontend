import LoginInput from "@/components/form/login-input"
import { useState } from "react"

export default function Register() {
    const [formValue, setFormValue] = useState({
        name: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    // 输入事件
    const handleChange = (fieldName: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValue({ ...formValue, [fieldName]: e.target.value });
    };


    return (
        <div className="w-screen h-screen bg-gradient-to-r from-[#f9c2ec] to-[#abc2ee] flex justify-center items-center">

            <div className="w-4/12 h-4/5 bg-white rounded-3xl px-20 relative">
                <div className="flex justify-start">
                    <a href="login">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 absolute top-5 left-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </a>
                </div>

                <h1 className="text-6xl font-bold my-12 text-center">Register</h1>

                <div className="w-full py-4 flex flex-col gap-10">
                    <LoginInput type="text" label="Name" value={formValue.name} onChange={handleChange('name')}/>

                    <LoginInput type="text" label="Username" value={formValue.username} onChange={handleChange('username')}/>

                    <LoginInput type="password" label="Password" value={formValue.password} onChange={handleChange('password')} />

                    <LoginInput type="password" label="Confirm Password" value={formValue.confirmPassword} onChange={handleChange('confirmPassword')} />

                    <button className="w-full h-10 bg-indigo-500 text-white rounded-sm hover:bg-indigo-600">Sign Up</button>
                </div>
            </div>
        </div>
    )
}