import Menu from './menu';

export default function Body() {
    return (
        <div className='w-screen h-screen flex flex-row'>
            <Menu />

            <div className='w-full h-full'>
            </div>
        </div>
    )
}