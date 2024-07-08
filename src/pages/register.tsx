export default function Register() {

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
                    <div className="relative">
                        <input type="text" id="Name" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500" placeholder=" " required />
                        <label htmlFor="Name" className="
                            absolute left-0 top-2 transition-all ease-in
                            peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                            peer-focus:-top-5 peer-focus:text-sm peer-focus:text-indigo-600
                            peer-valid:-top-5 peer-valid:text-sm peer-valid:text-indigo-600
                        ">
                            Name
                        </label>
                    </div>

                    <div className="relative">
                        <input type="text" id="Username" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500" placeholder=" " required />
                        <label htmlFor="Username" className="
                            absolute left-0 top-2 transition-all ease-in
                            peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                            peer-focus:-top-5 peer-focus:text-sm peer-focus:text-indigo-600
                            peer-valid:-top-5 peer-valid:text-sm peer-valid:text-indigo-600
                        ">
                            Username
                        </label>
                    </div>

                    <div className="relative">
                        <input type="password" id="Password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500" placeholder=" " required />
                        <label htmlFor="Password" className="
                            absolute left-0 top-2 transition-all ease-in
                            peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                            peer-focus:-top-5 peer-focus:text-sm peer-focus:text-indigo-600
                            peer-valid:-top-5 peer-valid:text-sm peer-valid:text-indigo-600
                        ">
                            Password
                        </label>
                    </div>

                    <div className="relative">
                        <input type="password" id="ConfirmPassword" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500" placeholder=" " required />
                        <label htmlFor="ConfirmPassword" className="
                            absolute left-0 top-2 transition-all ease-in
                            peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                            peer-focus:-top-5 peer-focus:text-sm peer-focus:text-indigo-600
                            peer-valid:-top-5 peer-valid:text-sm peer-valid:text-indigo-600
                        ">
                            Confirm Password
                        </label>
                    </div>


                    <button className="w-full h-10 bg-indigo-500 text-white rounded-sm hover:bg-indigo-600">Sign Up</button>
                </div>
            </div>
        </div>
    )
}