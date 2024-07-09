import { useState } from "react";
import LoginInput from "@/components/form/login-input";

export default function Login() {
    const [formValue, setFormValue] = useState({
        username: '',
        password: ''
    });

    return (
        <div className="w-screen h-screen bg-gradient-to-r from-[#f9c2ec] to-[#abc2ee] flex justify-center items-center">
            <div className="w-4/12 h-4/5 bg-white rounded-3xl px-20">
                <h1 className="text-6xl font-bold my-32 text-center">Login</h1>

                <div className="w-full py-4 flex flex-col gap-10">
                    <LoginInput type="text" label="Username" value={formValue.username}/>

                    <LoginInput type="password" label="Password" value={formValue.password}/>

                    <button className="w-full h-10 bg-indigo-500 text-white rounded-sm hover:bg-indigo-600">Log in</button>
                </div>

                <p className="text-center text-gray-500">Don&apos;t have an account yet? <a href="/register" className="text-indigo-500">Register</a></p>
            </div>
        </div>
    )
}