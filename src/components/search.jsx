import { useContext, useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { GithubContext } from '../Context/GitContext'
export default function Search() {
    const [input, setInput] = useState('')
    const {gitSearch,name} = useContext(GithubContext)
    // name&&console.log(name)
    return (
        <div className="search">
            <div className='flex border-gray border'>
                <span><AiOutlineSearch /></span>
                <input type="text" name="" id=""  value = {input}placeholder='Enter Github User' onChange={(e) => {setInput(e.target.value)}}/>
                <span onClick={(e) => {gitSearch(input)}}>Search</span>
            </div>
        </div>
    )
}