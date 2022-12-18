import { useContext } from 'react'
import {GoRepo} from 'react-icons/go'
import {TbUsers,TbUserPlus} from 'react-icons/tb'
import {BsCodeSquare} from 'react-icons/bs'
import { GithubContext } from '../Context/GitContext'
export default function Info() {
    const {repo, follower, following, git} = useContext(GithubContext)
    const data = [
        {
            id: 'info1',
            icon: GoRepo,
            count: repo,
            title: 'Repo',
            color: '#DA4A91',
            bg: '#FDE0F0'
        },
        {
            id: 'info2',
            icon: TbUsers,
            count: follower,
            title: 'Followers',
            color: '#2CAEBA',
            bg: '#E0FCFF'
        },
        {
            id: 'info3',
            icon: TbUserPlus,
            count: following,
            title: 'Following',
            color: '#5D55FA',
            bg:'#E6E6FF'
        },
        {
            id: 'info4',
            icon: BsCodeSquare,
            count: git,
            title: 'Gits',
            color:'#F0B429',
            bg:'#FFFBEA'
        },
    ]
    return (
        <div className="info flex item-center justify-between px-3 mt-10">
            {data.map((info,index) => {
                return (
                    <div className='info-item flex items-center' key = {info+index}>
                        <span className={`info-icon ${info.title} mr-5 text-2xl font-bold w-12 h-12 flex items-center justify-center rounded-[50%]`} ><info.icon /></span>
                        <div className='flex flex-col items-center justify-center'>
                            <p className='text-[#102A42] text-3xl font-bold text-center'>{info.count}</p>
                            <p className='text-center text-md text-gray-500 tracking-[1.5px]'>{info.title} </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}