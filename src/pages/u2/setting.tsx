import Steps from "@/components/navigation/steps/steps"
import { StepItemProps } from "@/components/navigation/steps/types"
import Input from "@/components/form/input";
import { useState } from "react";
import Home from "@/assets/icons/home.svg?react";

export default function Setting() {
    const stepItems: StepItemProps[] = [
        { title: '获取Key', subTitle: '' },
        { title: '绑定Key', subTitle: '' },
        { title: '获取Token', subTitle: '' }
    ];

    const [current, setCurrent] = useState(0);

    // 切换事件
    const handleChange = (current: number) => {
        setCurrent(current);
    };


    // uid
    const [uid, setUid] = useState('');

    return (
        <div className="w-full h-full">
            <div className="flex flex-col items-center">
                <Steps items={stepItems} direction="horizontal" current={current} onChange={handleChange} />
            </div>

            <div className="">
                {current === 0 ? <GetKeyContent uid={uid} setUid={setUid}/> : current === 1 ? BindKeyContent() : GetTokenContent()}
            </div>
        </div>
    )
}

function GetKeyContent({uid, setUid}: {uid: string, setUid: Function}) {
    return (
        <div className="">
            <Input type="text" suffixIcon={<Home/>} placeholder="123123" clearable value={uid} onChange={(value) => setUid(value)}/>
        </div>
    )
};

function BindKeyContent() {
    return (
        <>2</>
    )
};

function GetTokenContent() {
    return (
        <>3</>
    )
};