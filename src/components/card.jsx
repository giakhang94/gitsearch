export default function Card({name, userData, isFollow, small}) {
    return (
        <div className="flex items-center my-3">
            <div className={`${!small && "w-20 h-20 min-w-[80px]" } mr-5 ${small && "w-12 h-12 min-w-[48px]"} `}>
                <img src={userData.avtUrl} alt="" className="rounded-[50%] w-full min-w-10"  />
            </div>
            <div className="flex-1 flex flex-col min-w-[200px]">
                <span className={`font-bold ${!small && 'tablet:text-2xl'} ${small && 'tablet:text-xl'} ${!small && 'laptop:text-2xl'} ${small && 'laptop:text-xl'}  text-[#102A42] mobile:text-lg smallmobile:text-lg`}>{name}</span>
                <span className="text-gray-500 text-sm">
                    {!isFollow && <a href={userData.login}>{userData.login}</a>}
                    {isFollow && '@' + userData.login}
                    </span>
            </div>
            {isFollow&&<button className="hover:bg-[#2CAEBA] hover:text-white bg-none py-1 px-4 border border-[#2CAEBA] text-[#2CAEBA] rounded-3xl tracking-[1.5px]">Follow</button>}
    </div>
    )
}