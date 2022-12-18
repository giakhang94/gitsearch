export default function Card({name, userData, isFollow, small}) {
    return (
        <div className="flex items-center my-3">
        <div className={`${!small && "w-20 h-20" } mr-5 ${small && "w-12 h-12"}`}>
            <img src={userData.avtUrl} alt="" className="rounded-[50%]"  />
        </div>
        <div className="flex-1 flex flex-col">
            <span className={`font-bold ${!small && 'text-2xl'} ${small && 'text-xl'} text-[#102A42]`}>{name}</span>
            <span className="text-gray-500 text-sm">
                {!isFollow && <a href={userData.login}>{userData.login}</a>}
                {isFollow && '@' + userData.login}
                </span>
        </div>
        {isFollow&&<button className="hover:bg-[#2CAEBA] hover:text-white bg-none py-1 px-4 border border-[#2CAEBA] text-[#2CAEBA] rounded-3xl tracking-[1.5px]">Follow</button>}
    </div>
    )
}