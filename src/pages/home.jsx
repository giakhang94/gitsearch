
import Charts from '../charts/Charts'
import {Search, User, Info, Follower} from '../components'
function Home() {
    return (
        <div className="home dashboard px-20">
            <div className="header">
                <div className="user">
                    <img src="https://lh3.googleusercontent.com/a/AEdFTp56uDUQNSSP3GXXeZYb1HkmTG--5cZkLJSVT0fa=s96-c" alt="" />
                    <p><span>Welcome, </span>Gia Khang Nguyen</p> 
                </div>
                <button>Logout</button>
            </div>
            <Search />
            <Info />
            <div className='flex mt-10 h-[300px] mb-5'>
                <User />
                <Follower />
            </div>
            <Charts />
        </div>
    ) 
}

export default Home