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
            title: 'Repos',
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
        <div className="info grid tablet:grid-cols-2 Ptablet:grid-cols-4 laptop:grid-cols-4 mobile:grid-cols-2 smallmobile:grid-cols-2 item-center justify-between px-3 mt-12">
            {data.map((info,index) => {
                return (
                    <div className='info-item flex items-center' key = {info+index}>
                        <span className={`info-icon ${info.title} mr-5 laptop:text-2xl tablet:text-xl mobile:text-md smallmobile:text-md font-bold tablet:w-12 tablet:h-12 laptop:w-12 laptop:h-12 mobile:w-8 mobile:h-8 smallmobile:w-8 smallmobile:h-8 flex items-center justify-center rounded-[50%]`} ><info.icon /></span>
                        <div className='flex flex-col items-center justify-center'>
                            <p className='text-[#102A42] laptop:text-3xl tablet:text-3xl mobile:text-xl smallmobile:text-xl font-bold '>{info.count}</p>
                            <p className=' laptop:text-md tablet:text-md mobile:text-sm smallmobile:text-sm text-gray-500 tracking-[1.5px]'>{info.title} </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}