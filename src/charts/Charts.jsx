import { useContext, useEffect, useState } from "react";
import { Loading } from "../components";
import { GithubContext } from "../Context/GitContext";
import RepoForkChart from "./ForkChart";
import PieChart from "./PieChart";
import StarByLanguage from "./StarByLanguageDonghut";
import StarsByRepoBarChart from "./StarsBarChart";

export default function Charts() {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const {userData} = useContext(GithubContext)
    const reposUrl = userData.reposUrl
    // console.log(reposUrl)

    useEffect(()=> {
        const fetchData = async()=> {
            const resp = await fetch(reposUrl+'?per_page=100')
            if(resp) {

                const respJson = await resp.json()
                // setPieData(respJson)
                //xu ly du lieu cho pie chart
                const dataPrecent = respJson.reduce((accum, item)=>{
                    if (!item.language) return accum
                    if(!accum[item.language]) {
                        accum[item.language] = 1
                    }else {
                        accum[item.language] +=1
                    }
                    return accum
    
                
                },{})
                // console.log(item.language)
                const languages = Object.keys(dataPrecent)
                const pieData =  [] //data % ngon ngu lap trinh su dung nhieu nhat, cho pie chart
                languages.map(language => {
                    pieData.push({label: language, value: dataPrecent[language]})
                })
                //xu li du lieu cho column chart
                const mostPopular = respJson.reduce((total, repo) => {
                    total.fork[repo.name] = {label: repo.name, value: repo.forks}
                    total.stars[repo.name] = {label: repo.name, value: repo.stargazers_count}
                    return total
                }, {fork:{}, stars: {}})
                // console.log(mostPopular)
                const top5PopularForks = Object.values(mostPopular.fork).sort((a, b) => {
                    return a.value - b.value
                }) 
                // console.log(top5PopularForks.slice(-5))
                const top5PopularStars = Object.values(mostPopular.stars).sort((a, b) => {
                    return a.value - b.value
                }) 
                // console.log(top5PopularForks.slice(-5))
                // console.log(top5PopularStars.slice(-5))
                //chu ly cho donghut chart, stars per language
                const starByLanguage = respJson.reduce((total, repo) => {
                    if(!repo.language) return total
                    if(!total[repo.language]) {
                        total[repo.language] = 0
                    }
                    total[repo.language] += repo.stargazers_count;
                    
                    return total
                }, {})
                const starsByLang = [];
                Object.keys(starByLanguage).map(item => {
                    return starsByLang.push({label: item, value: starByLanguage[item]})
                })
                const dataRepos = {starsByLang, top5Forks: [...top5PopularForks.slice(-5).reverse()], top5Stars: [...top5PopularStars.slice(-5).reverse()], pieData: pieData}
                setData(dataRepos)
                setLoading(false)
            }
        }
        fetchData()
    }, [reposUrl])
    if(loading) {return <Loading />}
    else {
        return (
            <div className="space-y-1">
                <div className="flex items-center tablet:flex-col Ptablet:flex-row laptop:flex-row mobile:flex-col smallmobile:flex-col">
                    <div className="tablet:w-full flex justify-center Ptablet:w-2/4 Ptablet:max-w-[400px] tablet:max-w-[400px] laptop:max-w-[600px] laptop:w-2/4 mobile:w-full mobile:max-w-[300px] smallmobile:w-full smallmobile:max-w-[280px]">
                        <PieChart data = {data.pieData}/>
                    </div>
                    <div className="tablet:w-full  flex justify-center Ptablet:w-2/4 Ptablet:max-w-[400px] tablet:max-w-[400px] laptop:max-w-[600px] laptop:w-2/4 mobile:w-full mobile:max-w-[300px] smallmobile:w-full smallmobile:max-w-[280px]">
                        <RepoForkChart data = {data.top5Forks}/>
                    </div>
                </div>
                <div className="block py-5"></div>
                <div className="flex items-center tablet:flex-col Ptablet:flex-row laptop:flex-row mobile:flex-col smallmobile:flex-col">
                    <div className="tablet:w-full flex justify-center Ptablet:w-2/4 Ptablet:max-w-[400px] tablet:max-w-[400px] laptop:max-w-[600px] laptop:w-2/4 mobile:w-full mobile:max-w-[300px] smallmobile:w-full smallmobile:max-w-[280px]">
                        <StarByLanguage data = {data.starsByLang}/>
                    </div>
                    <div className="tablet:w-full flex justify-center Ptablet:w-2/4 Ptablet:max-w-[400px] tablet:max-w-[400px] laptop:max-w-[600px] laptop:w-2/4 mobile:w-full mobile:max-w-[280px] smallmobile:w-full smallmobile:max-w-[250px]">
                        <StarsByRepoBarChart data = {data.top5Stars}/>
                    </div>
                </div>
            </div>
        )
    }
}