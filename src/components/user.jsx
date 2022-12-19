import { useContext } from "react"
import { GithubContext } from "../Context/GitContext"
import {ImOffice} from 'react-icons/im'
import {MdLocationOn, MdLink} from 'react-icons/md'
import Card from "./card"

export default function User() {
    const {name, userData} = useContext(GithubContext)
    return (
        <div className="user tablet:w-full laptop:w-2/4 mobile:w-full mobile:pr-0 mobile:mr-5 smallmobile:w-full smallmobile:pr-5 smallmobile:mr-5 laptop:pr-12 laptop:mr-5 tablet:mr-5 tablet:pr-5 mobile:mb-6 smallmobile:mb-6 h-[250px]">
            <h3 className="text-gray-500 text-xl">User</h3>
            <Card userData = {userData} name = {name} isFollow />
            <h3 className="my-2 text-gray-700">{userData.bio}</h3>
            <div className=" my-2 space-y-1 text-gray-600">
                <p className="flex items-center"><span className="text-gray-500 font-bold mr-5"><ImOffice /></span><span className="">{userData.company}</span></p>
                <p className="flex items-center"><span className="text-gray-500 font-bold mr-5"><MdLocationOn /></span><span>{userData.location}</span></p>
                <p className="flex items-center"><span className="text-gray-500 font-bold mr-5"><MdLink /></span><span className="text-blue-600"><a href={userData.blog}>{userData.blog}</a></span></p>
            </div>
        </div>
    )
}