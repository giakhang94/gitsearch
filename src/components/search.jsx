import { useContext, useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { GithubContext } from '../Context/GitContext'
export default function Search() {
    const [input, setInput] = useState('')
    const {gitSearch,name} = useContext(GithubContext)
    // name&&console.log(name)
    return (
        <form className="search flex justify-center items-center">
            <div className=' px-2 py-1 flex items-center laptop:w-[50%] tablet:w-[65%] mobile:w-[80%] smallmobile:w-[80%] min-w-[200px] border border-gray-200 shadow-sm shadow-gray-300 rounded-md'>
                <span className='text-gray-500 text-lg'><AiOutlineSearch /></span>
                <input type="text" className=' outline-none text-gray-500 py-1 px-1 pl-5 pr-10 w-full' name="" id=""  value = {input}placeholder='Enter Github User' onChange={(e) => {setInput(e.target.value)}}/>
            <button className='px-2 py-1 bg-[#7ED4D9] text-white font-semibold text-md rounded-md' onClick={(e) => {e.preventDefault(); gitSearch(input)}}>Search</button>
            </div>
        </form>
    )
}