import loading from '../assets/images/Reload-1s-200px.svg'
export default function Loading() {
    return (
        <div className="loading flex w-full h-screen justify-center items-center">
            <img src={loading} alt="" />
        </div>
    )
}