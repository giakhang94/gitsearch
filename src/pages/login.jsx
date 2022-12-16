import { useState } from "react"
import { Link } from "react-router-dom"
import {FcGoogle} from 'react-icons/fc'
import {AiOutlineMail} from 'react-icons/ai'
import {BiLockAlt} from 'react-icons/bi'
export default function Login() {
    const [active, setActive] = useState('login')
    const [password, setPassword] = useState('')
    const [inputValue, setInputValue] = useState('')
    return (
        <div className="login my-auto mx-auto w-full h-screen flex items-center justify-center">
            <div className="login-content flex flex-col items-center justify-between  bg-white border border-gray-300 rounded-sm  w-[25%] h-fit min-h-[500px] min-w-[300px]">
                <h2 className="title flex items-center justify-center py-5 bg-gray-300 w-full text-lg tracking-[1.5px] font-semibold ">Github Users</h2>
                <div className="tab flex items-center w-full text-center">
                    <div className={`w-2/4 border-r border-gray-300 h-full py-2 text-md cursor-pointer ${active === 'in'? 'text-[#2caeba] font-bold':''}`} onClick = {() => {setActive('in')}}>Log In</div>
                    <div className={`w-2/4 hfull py-2 cursor-pointer ${active === 'up'? 'text-[#2caeba] font-bold':''}`} onClick = {() => {setActive('up')}}>Sign Up</div>
                </div>
                <div className="w-full px-3 flex justify-center">
                    <button className="mt-6 flex items-center justify-center bg-blue-600 text-white text-md py-2 w-full  rounded-sm"><span className="mr-5 bg-white rounded-[50%]"><FcGoogle/></span><span>Sign {active}  with Google</span></button>
                </div>
                <p className="block text-gray-500">or</p>
                <form action="" className="w-full px-3">
                    <div className="flex items-center border border-gray-300 py-1 rounded-sm w-full px-1 mb-2">
                        <span><AiOutlineMail className="mt-1 mr-5 text-gray-500"/></span>
                        <input type = "text" value = {inputValue} onChange = {(e) => {setInputValue(e.target.value)} } className = "text-gray-500 bg-red w-full h-full outline-none text-sm" placeholder="yours@example.com" />
                    </div>
                    <div className="flex items-center border border-gray-300 py-1 rounded-sm w-full px-1">
                        <span><BiLockAlt className="mt-1 mr-5 text-gray-500 "/></span>
                        <input type = "password" value = {password} onChange = {(e) => {setPassword(e.target.value)} } className = "text-gray-500 w-full h-full outline-none text-sm" placeholder="your password" />
                    </div>
                </form>
                <Link to = '/forgot-password'>
                <p className="block text-sm">Don't remember your Password?</p>
                </Link>
                <button className="w-full h-[60px] text-lg text-white font-semibold bg-[#2CAEBA] rounded-b-sm">{active === 'in'?'Login':'SignUp'}</button>
            </div>
        </div>
    )
}