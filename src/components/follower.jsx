import { useEffect, useState } from "react"
import { useContext } from "react"
import { GithubContext } from "../Context/GitContext"
import Card from "./card"

export default function Follower() {

    //mock xong
    const [followerData, setFollowerData] = useState([])
    const {followerUrl} = useContext(GithubContext)
    useEffect(() => {
        const fetchFollowers = async() => {
            const resp = await fetch(followerUrl)
            const respJson = await resp.json()
            setFollowerData(respJson)
        }
        fetchFollowers()
    }, [followerUrl])
    return (
        <div className="followers w-2/4 h-[250px] px-5">
            <h3 className="text-gray-500 text-xl">Follwers</h3>
            <div className="followers-list overflow-y-auto h-full pt-2 ">
                {followerData.map(follower => {
                    return <Card small key = {follower.id}userData={{avtUrl: follower.avatar_url, login: follower.html_url, bio: follower.bio, company: follower.company, location: follower.location, blog: follower.blog}} name ={follower.login}/>
                })}
            </div>
        </div>
    )
}