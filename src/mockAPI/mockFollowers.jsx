import { useEffect, useState } from "react"

export default function MockFollower() {
    const [data, setData] = useState([])
    useEffect(()=> {
        const fetchAPI = async() => {
            const resp = await fetch('https://api.github.com/users/john-smilga/followers');
            const dataJson = await resp.json()
            setData(dataJson)
        }
        fetchAPI()
    },[])
    return data  
}