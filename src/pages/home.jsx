
import Charts from '../charts/Charts'
import {Search, User, Info, Follower, Navbar} from '../components'
function Home() {
    return (
        <div className="home dashboard laptop:px-20 tablet:px-20 mobile:px-5 smallmobile:px-3">
            <Navbar />
            <Search />
            <Info />
            <div className='flex laptop:flex-row tablet:flex-col mobile:flex-col smallmobile:flex-col mt-10 min-h-[300px] mb-5'>
                <User />
                <Follower />
            </div>
            <Charts />
        </div>
    ) 
}

export default Home