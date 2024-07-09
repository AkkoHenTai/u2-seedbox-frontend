
interface LoginInputProps {
    label: string;
    value: string;
    type: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function LoginInput(props: LoginInputProps) {
    return (
        <div className="relative">
            <input type={props.type} id={props.label} value={props.value} onChange={props.onChange} autoComplete="off"
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500" placeholder='' required
            />
            <label htmlFor={props.label} className="
                absolute left-0 top-2 transition-all ease-in
                peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                peer-focus:-top-5 peer-focus:text-sm peer-focus:text-indigo-600
                peer-valid:-top-5 peer-valid:text-sm peer-valid:text-indigo-600
            ">
                {props.label}
            </label>
        </div>
    )
}