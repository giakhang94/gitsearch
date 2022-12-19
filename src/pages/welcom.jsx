import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
export default function Welcome() {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className="welcome w-full h-screen bg-[#F1F5F8] flex flex-col items-center justify-center">
            <div className="welcome-img mb-8 w-2/4">
                <img className="w-full h-auto object-contain" src="https://react-search-github-users.netlify.app/static/media/login-img.45d3b74fbb4ac483314eef377e006a54.svg" alt="" />
            </div>
            <h2 className="text-5xl text-[#102A42] font-bold block mb-8">Github User</h2>
            <button onClick = {()=> { loginWithRedirect()}}className="text-white block hover:opacity-80 text-md tracking-[1.5px] rounded-md py-1 px-3 bg-[#2CAEBA]">LOG IN / SIGN UP</button>
        </div>
    )
}